import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wgz1v2vad.css';
import '../../css/p/p7h3k3bwp.css';
import '../../css/o/o6if1gbhb.css';
import '../../css/l/lq23_jbfj.css';
import '../../css/d/dietrebfe.css';
import '../../css/e/erl-ix-yf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wgz1v2vad"/><path class="p7h3k3bwp"/><path clip-rule="evenodd" class="o6if1gbhb"/><path clip-rule="evenodd" class="lq23_jbfj"/><path clip-rule="evenodd" class="dietrebfe"/><path class="erl-ix-yf"/></g>`,
		"fallback": "fluent-emoji-flat:lacrosse",
	});
}

export default Component;
