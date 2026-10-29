import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/p/psv5noyru.css';
import '../../css/q/qhh3n_bdt.css';
import '../../css/o/o40j11b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="psv5noyru"/><path class="qhh3n_bdt"/><path class="o40j11b-z wm-a"/></g>`,
		"fallback": "withicons:language",
	});
}

export default Component;
