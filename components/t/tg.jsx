import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vljrm96wr.css';
import '../../css/j/ju7w-1bcy.css';
import '../../css/s/s7iuqsm4j.css';
import '../../css/o/oxztbklch.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vljrm96wr"/><path clip-rule="evenodd" class="ju7w-1bcy"/><path class="s7iuqsm4j"/><path clip-rule="evenodd" class="oxztbklch"/></g>`,
		"fallback": "flagpack:tg",
	});
}

export default Component;
