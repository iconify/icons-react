import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m52xe297f.css';
import '../../css/q/qdp4kbckc.css';
import '../../css/y/y3mtozbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m52xe297f"/><path class="qdp4kbckc"/><path class="y3mtozbud"/>`,
		"fallback": "withicons-bauhaus:plane",
	});
}

export default Component;
