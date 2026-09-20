import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zog9gac6u.css';
import '../../css/i/ihlcnwbup.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zog9gac6u"/><circle class="ihlcnwbup"/></g>`,
		"fallback": "streamline:travel-map-location-pin-navigation-map-maps-pin-gps-location",
	});
}

export default Component;
