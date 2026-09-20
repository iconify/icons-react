import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayzsdqbws.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayzsdqbws"/>`,
		"fallback": "pinhead:pixel-house-with-flag",
	});
}

export default Component;
