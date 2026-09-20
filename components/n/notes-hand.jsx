import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md8en7cla.css';
import '../../css/p/p1hqjib3g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md8en7cla"/><path class="p1hqjib3g"/>`,
		"fallback": "streamline-freehand:notes-hand",
	});
}

export default Component;
