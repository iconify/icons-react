import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3eskqbkl.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3eskqbkl"/>`,
		"fallback": "fa6-solid:voicemail",
	});
}

export default Component;
