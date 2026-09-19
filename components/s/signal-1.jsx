import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mx61tsb8a.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mx61tsb8a"/>`,
		"fallback": "si-glyph:signal-1",
	});
}

export default Component;
