import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ni1vsp91j.css';
import '../../css/a/atbqptbwe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ni1vsp91j"/><path class="atbqptbwe"/>`,
		"fallback": "catppuccin:java-interface",
	});
}

export default Component;
