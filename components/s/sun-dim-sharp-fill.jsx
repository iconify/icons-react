import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pht41zbla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pht41zbla"/>`,
		"fallback": "keyline-icons:sun-dim-sharp-fill",
	});
}

export default Component;
