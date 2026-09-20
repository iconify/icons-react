import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyc6aqbed.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyc6aqbed"/>`,
		"fallback": "pinhead:palette-with-music-note",
	});
}

export default Component;
