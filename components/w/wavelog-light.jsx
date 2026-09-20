import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdmw0mdax.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdmw0mdax"/>`,
		"fallback": "selfhst:wavelog-light",
	});
}

export default Component;
