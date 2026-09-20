import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu-97bcmg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu-97bcmg"/>`,
		"fallback": "oui:lock",
	});
}

export default Component;
