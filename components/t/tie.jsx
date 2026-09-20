import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wjnpq1bww.css';
import '../../css/u/ub0ww6gsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wjnpq1bww"/><path class="ub0ww6gsf"/></g>`,
		"fallback": "tabler:tie",
	});
}

export default Component;
