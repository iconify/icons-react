import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nf74hnsol.css';
import '../../css/e/e215zmbyo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nf74hnsol"/><path class="e215zmbyo"/>`,
		"fallback": "energy-icons:thermal-storage-48",
	});
}

export default Component;
