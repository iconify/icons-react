import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e4g2mfism.css';

const viewBox = {"width":208,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e4g2mfism"/>`,
		"fallback": "ps:left",
	});
}

export default Component;
