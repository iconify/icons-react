import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eql839oef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eql839oef"/>`,
		"fallback": "keyline-icons:rotate-cw-plus-sharp-fill",
	});
}

export default Component;
