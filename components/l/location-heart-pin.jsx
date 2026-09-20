import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/h/hiioq7nmy.css';
import '../../css/i/ibt374k7g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="hiioq7nmy"/><path class="ibt374k7g"/></g>`,
		"fallback": "streamline-flex:location-heart-pin",
	});
}

export default Component;
