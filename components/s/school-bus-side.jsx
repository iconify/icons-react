import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/skd7wqbfp.css';
import '../../css/d/drqyc4lxk.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="skd7wqbfp"/><path class="drqyc4lxk"/></g>`,
		"fallback": "streamline-flex:school-bus-side",
	});
}

export default Component;
