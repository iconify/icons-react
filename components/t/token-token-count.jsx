import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwzs1uccg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwzs1uccg"/>`,
		"fallback": "oui:token-token-count",
	});
}

export default Component;
