import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-g1_5bam.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-g1_5bam"/>`,
		"fallback": "streamline-plump:loading-horizontal-2",
	});
}

export default Component;
