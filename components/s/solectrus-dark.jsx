import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyowx2bpu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyowx2bpu"/>`,
		"fallback": "selfhst:solectrus-dark",
	});
}

export default Component;
