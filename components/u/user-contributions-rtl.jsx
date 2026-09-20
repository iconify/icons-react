import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkto-2bwr.css';
import '../../css/x/x_lnf_bhh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkto-2bwr"/><circle class="x_lnf_bhh"/>`,
		"fallback": "ooui:user-contributions-rtl",
	});
}

export default Component;
