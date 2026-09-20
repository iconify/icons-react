import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya5iwtz-k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ya5iwtz-k"/>`,
		"fallback": "streamline:speaker-2-remix",
	});
}

export default Component;
