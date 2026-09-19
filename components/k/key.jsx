import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/i/ivfjfqbqs.css';
import '../../css/l/lv78elb9m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="ivfjfqbqs"/><path class="lv78elb9m"/></g>`,
		"fallback": "glyphs:key",
	});
}

export default Component;
