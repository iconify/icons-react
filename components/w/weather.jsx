import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3cz62-fu.css';
import '../../css/g/g5bbzeb9f.css';
import '../../css/q/qg3x7bbvc.css';
import '../../css/r/rf8pe3b3z.css';
import '../../css/i/ifgsawbvc.css';
import '../../css/s/smk5otbnb.css';
import '../../css/a/a62bxmovo.css';
import '../../css/c/c_ua19nhg.css';

const viewBox = {"width":99.5,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<use href="#SVG2lLLgU3u"/><use href="#SVG2lLLgU3u"/><use href="#SVGGW9ljcnp"/><use href="#SVGGW9ljcnp"/><path class="v3cz62-fu"/><path class="g5bbzeb9f"/><path class="qg3x7bbvc"/><defs><path id="SVG2lLLgU3u" class="rf8pe3b3z"/><path id="SVGGW9ljcnp" class="ifgsawbvc"/><path id="SVGR0vFzNrd" class="smk5otbnb"/><circle id="SVGwjli4c1i" class="a62bxmovo"/></defs><clipPath id="SVGxEC66coR"><use href="#SVGwjli4c1i"/></clipPath><path clip-path="url(#SVGxEC66coR)" class="c_ua19nhg"/><use href="#SVGR0vFzNrd"/><use href="#SVGR0vFzNrd"/>`,
		"fallback": "flat-ui:weather",
	});
}

export default Component;
