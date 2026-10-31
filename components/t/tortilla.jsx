import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pg2srv-uh.css';
import '../../css/c/c4v83cb5w.css';
import '../../css/b/bqjzlrb8m.css';
import '../../css/i/i6kuee79v.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pg2srv-uh"/><path class="c4v83cb5w"/><path class="bqjzlrb8m"/><path class="i6kuee79v"/>`,
		"fallback": "iconito:tortilla",
	});
}

export default Component;
