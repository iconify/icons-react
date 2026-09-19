import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iun5hukdv.css';

const viewBox = {"width":1280,"height":1472};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iun5hukdv"/>`,
		"fallback": "vs:user-suit-female",
	});
}

export default Component;
