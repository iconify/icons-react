import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdhts7ruk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdhts7ruk"/>`,
		"fallback": "cbi:pedastal-fan",
	});
}

export default Component;
