import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rxy3cpb-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rxy3cpb-q"/>`,
		"fallback": "streamline-ultimate:natural-disaster-volcano-bold",
	});
}

export default Component;
