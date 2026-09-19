import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8osg5fzr.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j8osg5fzr"/>`,
		"fallback": "dinkie-icons:otfeature-hwid-small-filled",
	});
}

export default Component;
