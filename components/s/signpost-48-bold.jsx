import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bun5sbcsa.css';
import '../../css/e/erw03p5yn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bun5sbcsa"/><path class="erw03p5yn"/>`,
		"fallback": "energy-icons:signpost-48-bold",
	});
}

export default Component;
