import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc71osx1b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc71osx1b"/>`,
		"fallback": "selfhst:safeline-dark",
	});
}

export default Component;
