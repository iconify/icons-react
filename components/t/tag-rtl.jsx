import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bn3k_kbtr.css';
import '../../css/s/s13wyyboa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bn3k_kbtr"/><circle class="s13wyyboa"/>`,
		"fallback": "ooui:tag-rtl",
	});
}

export default Component;
