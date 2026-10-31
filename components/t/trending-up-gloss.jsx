import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3jvdks5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u3jvdks5p"/>`,
		"fallback": "withicons:trending-up-gloss",
	});
}

export default Component;
