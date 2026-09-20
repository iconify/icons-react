import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/spwcq9bsy.css';
import '../../css/m/mwc9s5vvp.css';
import '../../css/y/ygp_i2sen.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="spwcq9bsy"/><circle class="mwc9s5vvp"/><path class="ygp_i2sen"/></g>`,
		"fallback": "streamline:travel-places-column-2-pillar-building-historical-column",
	});
}

export default Component;
