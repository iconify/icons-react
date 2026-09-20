import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/m/meg07iluw.css';
import '../../css/l/l9i3rac1m.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="meg07iluw"/><path class="l9i3rac1m"/></g>`,
		"fallback": "streamline:shrimp",
	});
}

export default Component;
