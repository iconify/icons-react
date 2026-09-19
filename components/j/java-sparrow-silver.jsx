import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdgd5bauy.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rdgd5bauy"/>`,
		"fallback": "dinkie-icons:java-sparrow-silver",
	});
}

export default Component;
