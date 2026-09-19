import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/trvxt9qye.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="trvxt9qye"/>`,
		"fallback": "bi:question-lg",
	});
}

export default Component;
