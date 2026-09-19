import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thlvqn8bb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thlvqn8bb"/>`,
		"fallback": "codicon:sync-ignored",
	});
}

export default Component;
