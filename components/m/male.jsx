import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ai1nq5b5m.css';
import '../../css/a/a54vnbkrc.css';
import '../../css/r/r3s12lbsu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ai1nq5b5m"/><path class="a54vnbkrc"/><path class="r3s12lbsu"/></g>`,
		"fallback": "glyphs-poly:male",
	});
}

export default Component;
