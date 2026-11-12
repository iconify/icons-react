import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdh645bzz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdh645bzz"/>`,
		"fallback": "tabler:link-code",
	});
}

export default Component;
