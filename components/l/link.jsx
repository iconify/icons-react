import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0c1uhphr.css';
import '../../css/k/kx2q3nbbr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0c1uhphr"/><path class="kx2q3nbbr"/>`,
		"fallback": "flat-color-icons:link",
	});
}

export default Component;
