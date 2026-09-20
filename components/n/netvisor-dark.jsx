import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pme45vd5w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pme45vd5w"/>`,
		"fallback": "selfhst:netvisor-dark",
	});
}

export default Component;
