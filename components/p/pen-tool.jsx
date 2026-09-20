import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/v/vz00hf5vg.css';
import '../../css/g/g2cptyb9g.css';
import '../../css/m/m2p5oih7r.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="vz00hf5vg"/><path class="g2cptyb9g"/><path class="m2p5oih7r"/></g>`,
		"fallback": "streamline-flex:pen-tool",
	});
}

export default Component;
