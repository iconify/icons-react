import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frspmqwww.css';

const viewBox = {"width":8,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frspmqwww"/>`,
		"fallback": "octicon:primitive-dot",
	});
}

export default Component;
