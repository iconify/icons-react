import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n68n3sbzz.css';
import '../../css/q/q2iciacjh.css';
import '../../css/r/rjtxhq38y.css';
import '../../css/n/nmdgpsb_d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n68n3sbzz"/><circle class="q2iciacjh"/><path class="rjtxhq38y"/><path class="nmdgpsb_d"/></g>`,
		"fallback": "glyphs:signal-rod-bold",
	});
}

export default Component;
