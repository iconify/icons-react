import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixhl30b5t.css';
import '../../css/d/d-llkv2cb.css';
import '../../css/v/vc--wpv5i.css';
import '../../css/a/a_we93bsj.css';
import '../../css/a/af6bnpb6p.css';
import '../../css/n/npegzxm1p.css';
import '../../css/i/igveuaclx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixhl30b5t"/><radialGradient id="SVGMkOt6cfy" cx="-54.098" cy="658.534" r=".163" gradientTransform="matrix(181.3681 0 0 -181.3681 10008.34 119904.85)" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset="1" class="vc--wpv5i"/></radialGradient><path fill="url(#SVGMkOt6cfy)" class="a_we93bsj"/><radialGradient id="SVGsT3R8cHY" cx="-55.324" cy="658.535" r=".163" gradientTransform="matrix(181.35831 0 0 -181.3582 10340.35 119898.39)" gradientUnits="userSpaceOnUse"><stop offset="0" class="d-llkv2cb"/><stop offset="1" class="vc--wpv5i"/></radialGradient><path fill="url(#SVGsT3R8cHY)" class="af6bnpb6p"/><path class="npegzxm1p"/><path class="igveuaclx"/>`,
		"fallback": "selfhst:memcached-light",
	});
}

export default Component;
