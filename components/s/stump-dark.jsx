import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coh2acbbn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coh2acbbn"/>`,
		"fallback": "selfhst:stump-dark",
	});
}

export default Component;
