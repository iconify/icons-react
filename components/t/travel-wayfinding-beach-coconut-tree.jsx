import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmrnclb5y.css';
import '../../css/j/jwtf_zb2p.css';
import '../../css/l/l3g07yg3g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmrnclb5y"/><path class="jwtf_zb2p"/><path class="l3g07yg3g"/>`,
		"fallback": "streamline-pixel:travel-wayfinding-beach-coconut-tree",
	});
}

export default Component;
