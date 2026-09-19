import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnz306bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mnz306bcf"/>`,
		"fallback": "bitcoin-icons:mining-filled",
	});
}

export default Component;
