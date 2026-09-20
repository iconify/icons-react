import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/f42hnrynh.css';
import '../../css/f/f-lrjub6r.css';
import '../../css/v/v_yqtdf0p.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="f42hnrynh"/><path class="f-lrjub6r"/><path class="v_yqtdf0p"/></g>`,
		"fallback": "streamline-flex:scissors",
	});
}

export default Component;
