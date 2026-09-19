import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/n/nz42wcbby.css';
import '../../css/d/d75cv_bws.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="nz42wcbby"/><path class="d75cv_bws"/></g>`,
		"fallback": "cryptocurrency-color:pasl",
	});
}

export default Component;
