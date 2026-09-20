import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/ft2eftbti.css';
import '../../css/d/dv6askbfw.css';
import '../../css/y/yeukrqbeq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ft2eftbti"/><path class="dv6askbfw"/><path clip-rule="evenodd" class="yeukrqbeq"/></g>`,
		"fallback": "streamline-color:safe-vault-flat",
	});
}

export default Component;
