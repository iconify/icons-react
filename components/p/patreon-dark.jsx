import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/etba4kbfk.css';

const viewBox = {"width":36,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="etba4kbfk"/>`,
		"fallback": "thesvg-color:patreon-dark",
	});
}

export default Component;
