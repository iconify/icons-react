import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-ixdzbom.css';
import '../../css/f/ffofn9bxp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-ixdzbom"/><path class="ffofn9bxp"/>`,
		"fallback": "carbon:wave-period",
	});
}

export default Component;
