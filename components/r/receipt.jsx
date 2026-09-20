import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lqvrd4dfj.css';
import '../../css/n/ngodbcbus.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="lqvrd4dfj"/><path class="ngodbcbus"/></g>`,
		"fallback": "streamline:receipt",
	});
}

export default Component;
