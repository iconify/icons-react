import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogv1gbb3q.css';
import '../../css/x/xp-jb6vzb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogv1gbb3q"/><path class="xp-jb6vzb"/>`,
		"fallback": "pixel:science",
	});
}

export default Component;
