import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6tlb2bam.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t6tlb2bam"/>`,
		"fallback": "ion:md-notifications-outline",
	});
}

export default Component;
