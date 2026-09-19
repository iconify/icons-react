import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu4ip1kvb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bu4ip1kvb"/>`,
		"fallback": "gravity-ui:logo-telegram",
	});
}

export default Component;
