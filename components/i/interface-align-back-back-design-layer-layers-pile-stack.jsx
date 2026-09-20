import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/sdrf1hb2n.css';
import '../../css/w/wx5voob3f.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><rect class="sdrf1hb2n"/><path class="wx5voob3f"/></g>`,
		"fallback": "streamline:interface-align-back-back-design-layer-layers-pile-stack",
	});
}

export default Component;
