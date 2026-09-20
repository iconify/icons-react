import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8s6xvu0y.css';
import '../../css/c/cmb2wab2t.css';
import '../../css/g/g00s9kkvw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8s6xvu0y"/><path class="cmb2wab2t"/><path clip-rule="evenodd" class="g00s9kkvw"/>`,
		"fallback": "oui:vis-query-sql",
	});
}

export default Component;
