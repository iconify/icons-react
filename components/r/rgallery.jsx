import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kx7hvdk9m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kx7hvdk9m"/>`,
		"fallback": "selfhst:rgallery",
	});
}

export default Component;
