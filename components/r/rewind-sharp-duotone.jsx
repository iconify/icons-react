import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cq2_qrlix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cq2_qrlix"/>`,
		"fallback": "keyline-icons:rewind-sharp-duotone",
	});
}

export default Component;
