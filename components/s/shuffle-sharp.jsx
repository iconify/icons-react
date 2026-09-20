import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn62k951t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn62k951t"/>`,
		"fallback": "keyline-icons:shuffle-sharp",
	});
}

export default Component;
