import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/q/q7q6hachp.css';
import '../../css/w/wf0flhbfc.css';
import '../../css/a/alyw-jbci.css';
import '../../css/d/dl79pvbaw.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="q7q6hachp"/><path class="wf0flhbfc"/><path class="alyw-jbci"/><path class="dl79pvbaw"/></g>`,
		"fallback": "glyphs:target-pointer",
	});
}

export default Component;
