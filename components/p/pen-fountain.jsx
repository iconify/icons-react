import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/j5nlpcp6m.css';
import '../../css/g/ggk70abwq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="j5nlpcp6m"/><path class="ggk70abwq"/></g>`,
		"fallback": "glyphs:pen-fountain",
	});
}

export default Component;
