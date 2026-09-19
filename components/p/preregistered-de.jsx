import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol8sgrj7z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol8sgrj7z"/>`,
		"fallback": "academicons:preregistered-de",
	});
}

export default Component;
