import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkagmo7rc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkagmo7rc"/>`,
		"fallback": "selfhst:kener-dark",
	});
}

export default Component;
