import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft2odlb-f.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ft2odlb-f"/>`,
		"fallback": "pinhead:phone-bars-weak-signal",
	});
}

export default Component;
