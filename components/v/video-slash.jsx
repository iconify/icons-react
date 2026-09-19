import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7i_kf9pc.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7i_kf9pc"/>`,
		"fallback": "fa-solid:video-slash",
	});
}

export default Component;
