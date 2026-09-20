import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3quegb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a3quegb7i"/>`,
		"fallback": "streamline-sharp:phone-vibrate-solid",
	});
}

export default Component;
