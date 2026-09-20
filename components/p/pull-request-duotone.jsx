import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ert4v1b8j.css';
import '../../css/g/g2h3upp2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ert4v1b8j"/><path class="g2h3upp2o"/></g>`,
		"fallback": "si:pull-request-duotone",
	});
}

export default Component;
