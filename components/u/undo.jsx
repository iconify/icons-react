import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gs2vkabri.css';
import '../../css/f/f74ea-8ng.css';
import '../../css/z/zqr5bgb0v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gs2vkabri"/><path class="f74ea-8ng"/><path class="zqr5bgb0v"/></g>`,
		"fallback": "streamline-ultimate-color:undo",
	});
}

export default Component;
