import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/js-h4rqcj.css';
import '../../css/g/g42t1obco.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="js-h4rqcj"/><path class="g42t1obco"/></g>`,
		"fallback": "tabler:jump-rope",
	});
}

export default Component;
