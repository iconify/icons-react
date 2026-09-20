import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rzk6tablr.css';
import '../../css/n/n33_j5bls.css';
import '../../css/s/sdgbmebbp.css';
import '../../css/n/ndiqklb7s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rzk6tablr"/><path class="n33_j5bls"/><path class="sdgbmebbp"/><path class="ndiqklb7s"/></g>`,
		"fallback": "streamline-kameleon-color:nail-varnish-duo",
	});
}

export default Component;
