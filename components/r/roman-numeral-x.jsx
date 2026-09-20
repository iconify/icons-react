import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g8ica_bht.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g8ica_bht"/>`,
		"fallback": "pinhead:roman-numeral-x",
	});
}

export default Component;
