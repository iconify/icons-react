import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c4bw41thd.css';
import '../../css/k/kbtrenb5s.css';
import '../../css/d/dqk3scc2o.css';
import '../../css/q/qk90v_uvm.css';
import '../../css/v/vrwte0oxc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c4bw41thd"/><path clip-rule="evenodd" class="kbtrenb5s"/><path class="dqk3scc2o"/><path class="qk90v_uvm"/><path class="vrwte0oxc"/></g>`,
		"fallback": "glyphs-poly:pharmacy",
	});
}

export default Component;
