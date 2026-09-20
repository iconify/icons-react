import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/caz-d5aqz.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="caz-d5aqz"/>`,
		"fallback": "streamline:smiley-sparks-remix",
	});
}

export default Component;
