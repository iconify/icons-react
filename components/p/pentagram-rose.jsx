import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i11tn-zvt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i11tn-zvt"/>`,
		"fallback": "game-icons:pentagram-rose",
	});
}

export default Component;
