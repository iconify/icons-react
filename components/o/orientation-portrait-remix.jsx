import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z2hrrr2gf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z2hrrr2gf"/>`,
		"fallback": "streamline:orientation-portrait-remix",
	});
}

export default Component;
