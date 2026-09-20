import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8s6xvu0y.css';
import '../../css/a/av8fdd_xa.css';
import '../../css/r/rs66qrblo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8s6xvu0y"/><path class="av8fdd_xa"/><path clip-rule="evenodd" class="rs66qrblo"/>`,
		"fallback": "oui:vis-query-dql",
	});
}

export default Component;
