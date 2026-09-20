import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kghzxxa0p.css';
import '../../css/g/ghf3lkbyx.css';
import '../../css/d/duw6ubzmi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="kghzxxa0p"/><path class="ghf3lkbyx"/><path class="duw6ubzmi"/></g>`,
		"fallback": "streamline:interface-align-layers-2-design-layer-layers-pile-stack",
	});
}

export default Component;
