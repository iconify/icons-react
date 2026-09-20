import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/shjkay7rg.css';
import '../../css/g/gkg9reboq.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="shjkay7rg"/><path class="gkg9reboq"/></g>`,
		"fallback": "streamline:login-1",
	});
}

export default Component;
