import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/o3zs0wwrm.css';
import '../../css/j/jo0n1h6-a.css';
import '../../css/t/t-ngn6b1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="o3zs0wwrm"/><path class="jo0n1h6-a"/><path class="t-ngn6b1i"/></g>`,
		"fallback": "iconaut:popcorn",
	});
}

export default Component;
