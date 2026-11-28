import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p7lniib-c.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nhobn03np.css';
import '../../css/o/oc7p48bdb.css';
import '../../css/o/oi3kjkbsp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p7lniib-c secondary"/><g class="dt0cm9dhy primary"><path class="nhobn03np"/><path class="oc7p48bdb"/><path class="oi3kjkbsp"/></g>`,
		"fallback": "iconaut:line-chart-sparkles-duo",
	});
}

export default Component;
