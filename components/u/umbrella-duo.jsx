import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz-qoubxo.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/f/fz90fnpjg.css';
import '../../css/q/qoxrnac0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz-qoubxo secondary"/><g class="dt0cm9dhy primary"><path class="fz90fnpjg"/><path class="qoxrnac0o"/></g>`,
		"fallback": "iconaut:umbrella-duo",
	});
}

export default Component;
