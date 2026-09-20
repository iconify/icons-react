import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/l6lpf-bcq.css';
import '../../css/z/z86vc3bmj.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="l6lpf-bcq"/><path class="z86vc3bmj"/></g>`,
		"fallback": "streamline:invisible-1",
	});
}

export default Component;
