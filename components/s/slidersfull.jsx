import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e3_ia3bxd.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e3_ia3bxd"/>`,
		"fallback": "whh:slidersfull",
	});
}

export default Component;
