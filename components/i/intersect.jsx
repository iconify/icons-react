import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/n/n1r6dl4la.css';
import '../../css/q/qo9ef2xtw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="n1r6dl4la"/><path class="qo9ef2xtw"/></g>`,
		"fallback": "glyphs:intersect",
	});
}

export default Component;
