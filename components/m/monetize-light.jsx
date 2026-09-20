import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1-exye0j.css';
import '../../css/i/i7h1uo08v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1-exye0j"/><path class="i7h1uo08v"/>`,
		"fallback": "stash:monetize-light",
	});
}

export default Component;
