import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j1k46xb3f.css';
import '../../css/g/g88utob-b.css';
import '../../css/s/so2lxqpnn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j1k46xb3f"/><path class="g88utob-b"/><path class="so2lxqpnn"/></g>`,
		"fallback": "streamline-flex:recording-tape-bubble-circle",
	});
}

export default Component;
