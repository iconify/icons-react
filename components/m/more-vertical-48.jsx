import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq0swu20f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq0swu20f"/>`,
		"fallback": "energy-icons:more-vertical-48",
	});
}

export default Component;
