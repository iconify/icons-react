import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/garwd4hif.css';
import '../../css/d/d0gmrybii.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="garwd4hif"/><path class="d0gmrybii"/>`,
		"fallback": "file-icons:restructuredtext",
	});
}

export default Component;
