import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_54f839h.css';
import '../../css/n/nrm4cfbvo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_54f839h"/><path class="nrm4cfbvo"/>`,
		"fallback": "energy-icons:paragraph-20",
	});
}

export default Component;
