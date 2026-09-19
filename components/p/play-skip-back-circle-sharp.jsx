import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8q00obad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8q00obad"/>`,
		"fallback": "famicons:play-skip-back-circle-sharp",
	});
}

export default Component;
