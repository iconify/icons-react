import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w8s6xvu0y.css';
import '../../css/v/v-nzisfqm.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w8s6xvu0y"/><path class="v-nzisfqm"/>`,
		"fallback": "oui:vis-builder-saved-object",
	});
}

export default Component;
