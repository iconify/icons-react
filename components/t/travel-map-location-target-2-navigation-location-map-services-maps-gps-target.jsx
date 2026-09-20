import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/je99bqbog.css';
import '../../css/u/u6e-jyp6v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="je99bqbog"/><path class="u6e-jyp6v"/></g>`,
		"fallback": "streamline:travel-map-location-target-2-navigation-location-map-services-maps-gps-target",
	});
}

export default Component;
