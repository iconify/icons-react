import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/w/wjrfwr7ez.css';
import '../../css/u/uk5y7ubom.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="wjrfwr7ez"/><path class="uk5y7ubom"/></g>`,
		"fallback": "streamline:online-medical-web-service",
	});
}

export default Component;
