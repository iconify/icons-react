import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygm273o1e.css';
import '../../css/f/frppt49pm.css';
import '../../css/f/f6krerb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygm273o1e"/><path class="frppt49pm"/><path class="f6krerb0t"/>`,
		"fallback": "octicon:pin-slash-24",
	});
}

export default Component;
