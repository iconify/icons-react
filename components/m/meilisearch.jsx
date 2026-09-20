import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8x9wd4ds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8x9wd4ds"/>`,
		"fallback": "thesvg-color:meilisearch",
	});
}

export default Component;
