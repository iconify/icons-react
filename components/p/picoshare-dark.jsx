import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nn4u02bdi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nn4u02bdi"/>`,
		"fallback": "selfhst:picoshare-dark",
	});
}

export default Component;
