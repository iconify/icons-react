import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scdc07bde.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="scdc07bde"/>`,
		"fallback": "heroicons:rss-16-solid",
	});
}

export default Component;
