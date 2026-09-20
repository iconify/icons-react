import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hlizp9lzc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hlizp9lzc"/>`,
		"fallback": "selfhst:nextcloud-office-presentation-dark",
	});
}

export default Component;
