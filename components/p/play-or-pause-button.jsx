import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ea3mmeb7a.css';
import '../../css/e/ekc3embid.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ea3mmeb7a"/><path class="ekc3embid"/>`,
		"fallback": "openmoji:play-or-pause-button",
	});
}

export default Component;
