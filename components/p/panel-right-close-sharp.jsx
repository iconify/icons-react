import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kybbu-9xb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kybbu-9xb"/>`,
		"fallback": "keyline-icons:panel-right-close-sharp",
	});
}

export default Component;
