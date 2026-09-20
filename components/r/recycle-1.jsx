import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/loikblb0m.css';
import '../../css/d/d1bqygndn.css';
import '../../css/j/jt_ox3bji.css';
import '../../css/i/idq3n2bnw.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="loikblb0m"/><path class="d1bqygndn"/><path class="jt_ox3bji"/><path class="idq3n2bnw"/></g>`,
		"fallback": "streamline:recycle-1",
	});
}

export default Component;
