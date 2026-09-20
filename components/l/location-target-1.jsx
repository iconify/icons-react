import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rq8bxjnsx.css';
import '../../css/y/ydqchmbye.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="rq8bxjnsx"/><path class="ydqchmbye"/></g>`,
		"fallback": "streamline:location-target-1",
	});
}

export default Component;
