import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zl-jkyb3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zl-jkyb3d"/>`,
		"fallback": "iconoir:stretching",
	});
}

export default Component;
