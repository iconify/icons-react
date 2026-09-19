import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ecr-dlbow.css';
import '../../css/m/md286fbip.css';
import '../../css/x/x8iyrebzj.css';
import '../../css/n/nc0pyhlto.css';
import '../../css/p/ph-5sqrly.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="ecr-dlbow"/><g class="md286fbip"><path class="x8iyrebzj"/><path class="nc0pyhlto"/><path class="ph-5sqrly"/></g></g>`,
		"fallback": "cryptocurrency-color:pre",
	});
}

export default Component;
