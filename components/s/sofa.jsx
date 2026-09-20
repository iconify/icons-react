import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/a/ax7fmxbfj.css';
import '../../css/r/reoce-bau.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ax7fmxbfj"/><path class="reoce-bau"/></g>`,
		"fallback": "streamline-flex:sofa",
	});
}

export default Component;
