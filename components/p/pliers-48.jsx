import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc6qzlmiu.css';
import '../../css/k/kpa1g8jdv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc6qzlmiu"/><path class="kpa1g8jdv"/>`,
		"fallback": "energy-icons:pliers-48",
	});
}

export default Component;
