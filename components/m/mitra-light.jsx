import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lal_4cc9j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lal_4cc9j"/>`,
		"fallback": "selfhst:mitra-light",
	});
}

export default Component;
