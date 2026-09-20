import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw55eobve.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw55eobve"/>`,
		"fallback": "selfhst:picpeak-dark",
	});
}

export default Component;
