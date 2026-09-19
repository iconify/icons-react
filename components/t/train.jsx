import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/o/oicxziely.css';
import '../../css/k/kmxohsb8h.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="oicxziely"/><path class="kmxohsb8h"/></g>`,
		"fallback": "glyphs:train",
	});
}

export default Component;
