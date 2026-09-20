import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/y/ydkd9k2vo.css';
import '../../css/o/o72gpvbek.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><circle class="ydkd9k2vo"/><path class="o72gpvbek"/></g>`,
		"fallback": "streamline:interface-user-multiple-close-geometric-human-multiple-person-up-user",
	});
}

export default Component;
