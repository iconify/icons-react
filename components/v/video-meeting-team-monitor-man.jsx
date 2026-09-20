import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ju8rpyy-e.css';
import '../../css/e/e7xj5wb7j.css';
import '../../css/v/vqybd9jdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ju8rpyy-e"/><path class="e7xj5wb7j"/><path class="vqybd9jdf"/>`,
		"fallback": "streamline-freehand:video-meeting-team-monitor-man",
	});
}

export default Component;
