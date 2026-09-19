import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl9pvacpy.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl9pvacpy"/>`,
		"fallback": "fluent-mdl2:search-issue-mirrored",
	});
}

export default Component;
