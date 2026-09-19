import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzwc1y54b.css';
import '../../css/r/ra66rbckd.css';
import '../../css/z/zgszk2b4j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzwc1y54b"/><path class="ra66rbckd"/><path class="zgszk2b4j"/>`,
		"fallback": "carbon:play-outline-filled",
	});
}

export default Component;
