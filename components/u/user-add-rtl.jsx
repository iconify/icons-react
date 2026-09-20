import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vl3uoubvp.css';
import '../../css/b/b6eiwkb2v.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vl3uoubvp"/><circle class="b6eiwkb2v"/>`,
		"fallback": "ooui:user-add-rtl",
	});
}

export default Component;
