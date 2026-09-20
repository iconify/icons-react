import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8s6xvu0y.css';
import '../../css/e/ed612wbnx.css';
import '../../css/o/o-g8_8o4b.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8s6xvu0y"/><path class="ed612wbnx"/><path clip-rule="evenodd" class="o-g8_8o4b"/>`,
		"fallback": "oui:vis-query-promql",
	});
}

export default Component;
