import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eso-fhbfk.css';
import '../../css/y/ycpffxzkv.css';
import '../../css/y/y8d3_gc7o.css';
import '../../css/x/xe7dljbdl.css';
import '../../css/a/azx70rbck.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eso-fhbfk"/><path class="ycpffxzkv"/><path class="y8d3_gc7o"/><path class="xe7dljbdl"/><path class="azx70rbck"/></g>`,
		"fallback": "fluent-emoji-flat:llama",
	});
}

export default Component;
