import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/x/x50tnpb8a.css';
import '../../css/b/bht_9vb5d.css';
import '../../css/d/dln8ziysl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="x50tnpb8a"/><path class="bht_9vb5d"/><path class="dln8ziysl"/></g>`,
		"fallback": "streamline-flex:location-compass-2",
	});
}

export default Component;
