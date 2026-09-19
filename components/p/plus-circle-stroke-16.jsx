import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujuqxqbou.css';
import '../../css/c/cfqt67jpg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ujuqxqbou"/><path class="cfqt67jpg"/>`,
		"fallback": "garden:plus-circle-stroke-16",
	});
}

export default Component;
