import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsgnn88kw.css';
import '../../css/p/ph02kkyzz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsgnn88kw"/><path class="ph02kkyzz"/>`,
		"fallback": "octicon:issue-reopened-16",
	});
}

export default Component;
