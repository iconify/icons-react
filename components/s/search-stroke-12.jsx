import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbb1_2bju.css';
import '../../css/w/w43j2ubna.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="nbb1_2bju"/><path class="w43j2ubna"/>`,
		"fallback": "garden:search-stroke-12",
	});
}

export default Component;
