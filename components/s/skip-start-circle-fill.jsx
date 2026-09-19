import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nml_d7_9q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nml_d7_9q"/>`,
		"fallback": "bi:skip-start-circle-fill",
	});
}

export default Component;
