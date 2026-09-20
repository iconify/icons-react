import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mmulxe3id.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mmulxe3id"/>`,
		"fallback": "si:thumb-up-line",
	});
}

export default Component;
