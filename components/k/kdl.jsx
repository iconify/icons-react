import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqmi1bi_j.css';
import '../../css/i/i9il0nflb.css';
import '../../css/i/ijudkumzw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqmi1bi_j"/><path class="i9il0nflb"/><path class="ijudkumzw"/>`,
		"fallback": "catppuccin:kdl",
	});
}

export default Component;
