import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnhsm5wjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnhsm5wjc"/>`,
		"fallback": "material-icon-theme:kivy",
	});
}

export default Component;
