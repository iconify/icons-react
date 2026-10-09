import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsx9bkbtz.css';
import '../../css/b/bqcr30b7g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsx9bkbtz"/><path class="bqcr30b7g"/>`,
		"fallback": "energy-icons:search-20",
	});
}

export default Component;
