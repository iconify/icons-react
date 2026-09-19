import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9irqhbom.css';
import '../../css/b/bwibdw4bb.css';
import '../../css/o/oqwog-bbh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9irqhbom"/><path class="bwibdw4bb"/><path class="oqwog-bbh"/>`,
		"fallback": "boxicons:sleepy",
	});
}

export default Component;
