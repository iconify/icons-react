import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8_7469hg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8_7469hg"/>`,
		"fallback": "boxicons:siren-alt-filled",
	});
}

export default Component;
