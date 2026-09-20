import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gr4z8rb0m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gr4z8rb0m"/>`,
		"fallback": "pinhead:roman-numeral-iii-over-water",
	});
}

export default Component;
