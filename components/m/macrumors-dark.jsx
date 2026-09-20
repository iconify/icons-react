import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhoq_e62f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhoq_e62f"/>`,
		"fallback": "selfhst:macrumors-dark",
	});
}

export default Component;
