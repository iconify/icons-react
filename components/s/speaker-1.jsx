import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vlbiyu34p.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vlbiyu34p"/>`,
		"fallback": "f7:speaker-1",
	});
}

export default Component;
