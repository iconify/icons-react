import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b93j9cbjr.css';
import '../../css/d/dqndudb8x.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b93j9cbjr"/><path class="dqndudb8x"/>`,
		"fallback": "carbon:stop-outline",
	});
}

export default Component;
