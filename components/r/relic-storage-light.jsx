import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/upgxfqbek.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="upgxfqbek"/>`,
		"fallback": "selfhst:relic-storage-light",
	});
}

export default Component;
