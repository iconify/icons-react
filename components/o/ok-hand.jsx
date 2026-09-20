import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/mi-b4ho1m.css';
import '../../css/f/fg2fcbbfw.css';
import '../../css/t/tpml8eb-g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="mi-b4ho1m"/><path clip-rule="evenodd" class="fg2fcbbfw"/><path class="tpml8eb-g"/></g>`,
		"fallback": "streamline:ok-hand",
	});
}

export default Component;
