import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kij9dgb5f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kij9dgb5f"/>`,
		"fallback": "selfhst:letterboxd-dark",
	});
}

export default Component;
