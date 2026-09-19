import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otdmk9b3n.css';

const viewBox = {"width":256,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otdmk9b3n"/>`,
		"fallback": "academicons:open-access",
	});
}

export default Component;
