import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_lggdbfm.css';
import '../../css/h/hv7m9kkjg.css';
import '../../css/p/pir-ycgkc.css';
import '../../css/q/q9f3dpv9g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j_lggdbfm"/><path class="hv7m9kkjg"/><path class="pir-ycgkc"/><path class="q9f3dpv9g"/></g>`,
		"fallback": "streamline-kameleon-color:upload-cloud-computer-duo",
	});
}

export default Component;
