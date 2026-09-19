import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu40tbc2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wu40tbc2s"/>`,
		"fallback": "basil:music-solid",
	});
}

export default Component;
