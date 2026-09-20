import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nns_4vajp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nns_4vajp"/>`,
		"fallback": "pinhead:pixel-classical-building-with-dome-and-flag",
	});
}

export default Component;
