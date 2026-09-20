import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/e/efbn1tjkf.css';
import '../../css/b/bgd_qqbck.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="efbn1tjkf"/><path class="bgd_qqbck"/></g>`,
		"fallback": "streamline:travel-map-globe-model-planet-earth-globe-world",
	});
}

export default Component;
