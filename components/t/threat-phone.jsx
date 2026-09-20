import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/o6usaq9xg.css';
import '../../css/s/sfcgz1bhi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="o6usaq9xg"/><path class="sfcgz1bhi"/></g>`,
		"fallback": "streamline-flex:threat-phone",
	});
}

export default Component;
