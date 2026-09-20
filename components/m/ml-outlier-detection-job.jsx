import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ymonzhbhk.css';
import '../../css/w/wbjg6db2q.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ymonzhbhk"/><path class="ouiIcon__fillSecondary wbjg6db2q"/>`,
		"fallback": "oui:ml-outlier-detection-job",
	});
}

export default Component;
