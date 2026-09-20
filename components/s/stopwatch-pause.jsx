import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mz00i0b5b.css';
import '../../css/s/s6klz_bpj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="mz00i0b5b"/><path class="s6klz_bpj"/></g>`,
		"fallback": "reicon:stopwatch-pause",
	});
}

export default Component;
