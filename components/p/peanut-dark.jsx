import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb-mk4b3d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb-mk4b3d"/>`,
		"fallback": "selfhst:peanut-dark",
	});
}

export default Component;
