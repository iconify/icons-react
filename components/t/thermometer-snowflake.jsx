import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/m6qks8uby.css';
import '../../css/s/si9smc6kz.css';
import '../../css/v/vp529xjks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="m6qks8uby"/><path class="si9smc6kz"/><path class="vp529xjks"/></g>`,
		"fallback": "withicons-bauhaus:thermometer-snowflake",
	});
}

export default Component;
