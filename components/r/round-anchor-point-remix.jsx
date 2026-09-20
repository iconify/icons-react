import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ff-478dna.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ff-478dna"/>`,
		"fallback": "streamline-plump:round-anchor-point-remix",
	});
}

export default Component;
