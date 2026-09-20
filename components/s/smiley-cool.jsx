import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/z/zb5pn5mlm.css';
import '../../css/t/ts59c5bdh.css';
import '../../css/s/s7bradgdl.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="zb5pn5mlm"/><path class="ts59c5bdh"/><path class="s7bradgdl"/></g>`,
		"fallback": "streamline:smiley-cool",
	});
}

export default Component;
