import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dkesgfh4s.css';
import '../../css/m/m06lb4csh.css';
import '../../css/a/a5fqvcepc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dkesgfh4s"/><path class="m06lb4csh"/><path class="a5fqvcepc"/></g>`,
		"fallback": "streamline-color:paint-bucket",
	});
}

export default Component;
