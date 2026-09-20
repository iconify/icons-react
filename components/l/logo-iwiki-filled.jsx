import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fquq4wb5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fquq4wb5a"/>`,
		"fallback": "tdesign:logo-iwiki-filled",
	});
}

export default Component;
