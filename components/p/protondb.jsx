import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv-ijib_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv-ijib_h"/>`,
		"fallback": "simple-icons:protondb",
	});
}

export default Component;
