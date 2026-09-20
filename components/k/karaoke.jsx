import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upa3gv_wk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upa3gv_wk"/>`,
		"fallback": "maki:karaoke",
	});
}

export default Component;
