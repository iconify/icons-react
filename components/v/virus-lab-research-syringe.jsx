import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v-sbngbvh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v-sbngbvh"/>`,
		"fallback": "healthicons:virus-lab-research-syringe",
	});
}

export default Component;
