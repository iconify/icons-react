import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffuzoi-br.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffuzoi-br"/>`,
		"fallback": "jam:moon-f",
	});
}

export default Component;
