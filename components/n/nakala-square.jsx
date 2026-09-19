import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc8j7xilh.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc8j7xilh"/>`,
		"fallback": "academicons:nakala-square",
	});
}

export default Component;
