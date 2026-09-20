import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/g8p09vr5h.css';
import '../../css/v/vfyub0bsb.css';
import '../../css/g/g2qk9bbka.css';
import '../../css/m/mal0xkp4e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="g8p09vr5h"/><path class="vfyub0bsb"/><path class="g2qk9bbka"/><path class="mal0xkp4e"/></g>`,
		"fallback": "streamline:radioactive-2",
	});
}

export default Component;
