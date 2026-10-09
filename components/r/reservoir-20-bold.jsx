import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b9cqm39fx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b9cqm39fx"/>`,
		"fallback": "energy-icons:reservoir-20-bold",
	});
}

export default Component;
