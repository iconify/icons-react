import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ie7tk9bnz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ie7tk9bnz"/>`,
		"fallback": "f7:rectangle-on-rectangle-angled",
	});
}

export default Component;
