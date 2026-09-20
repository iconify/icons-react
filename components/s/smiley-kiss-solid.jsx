import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g43yo4b4d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g43yo4b4d"/>`,
		"fallback": "streamline:smiley-kiss-solid",
	});
}

export default Component;
