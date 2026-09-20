import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr1-omp7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr1-omp7d"/>`,
		"fallback": "proicons:sapling",
	});
}

export default Component;
