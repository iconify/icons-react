import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gdjy5jlqy.css';
import '../../css/p/pm2qdmdcn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="gdjy5jlqy"/><path class="pm2qdmdcn"/></g>`,
		"fallback": "streamline:interface-user-add-actions-add-close-geometric-human-person-plus-single-up-user",
	});
}

export default Component;
