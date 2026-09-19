import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b1f30kj5b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b1f30kj5b"/>`,
		"fallback": "academicons:open-materials",
	});
}

export default Component;
