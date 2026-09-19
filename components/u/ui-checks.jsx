import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogpk27bbo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogpk27bbo"/>`,
		"fallback": "bi:ui-checks",
	});
}

export default Component;
