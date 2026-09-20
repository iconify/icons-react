import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqbzp98xj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oqbzp98xj"/>`,
		"fallback": "streamline-block:travel-suitcase",
	});
}

export default Component;
