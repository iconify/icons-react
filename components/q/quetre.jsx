import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/stounr5hn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="stounr5hn"/>`,
		"fallback": "selfhst:quetre",
	});
}

export default Component;
