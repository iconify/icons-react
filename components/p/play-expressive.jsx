import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mndd9jbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mndd9jbox"/>`,
		"fallback": "nrk:play-expressive",
	});
}

export default Component;
