import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x3no7gs5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x3no7gs5j"/>`,
		"fallback": "tdesign:logo-xiaomareport-filled",
	});
}

export default Component;
