import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl6wzybyg.css';
import '../../css/k/kvxqcabet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nl6wzybyg"/><path class="kvxqcabet"/>`,
		"fallback": "solar:panel-bottom-open-bold",
	});
}

export default Component;
