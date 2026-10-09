import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofts-6g4o.css';
import '../../css/c/cqvp3bvcf.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ofts-6g4o"/><path class="cqvp3bvcf"/>`,
		"fallback": "energy-icons:panel-left-20",
	});
}

export default Component;
