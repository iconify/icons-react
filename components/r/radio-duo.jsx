import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v2iuv1fmo.css';
import '../../css/k/kctpyacdr.css';
import '../../css/l/l2uwf7bam.css';
import '../../css/b/bjb3nvb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="v2iuv1fmo"/><path class="kctpyacdr wm-a"/><path class="l2uwf7bam"/><path class="bjb3nvb0o wm-a"/></g>`,
		"fallback": "withicons:radio-duo",
	});
}

export default Component;
