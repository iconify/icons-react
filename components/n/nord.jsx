import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pid1qrb3p.css';
import '../../css/j/jng12gler.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pid1qrb3p"/><path class="jng12gler"/>`,
		"fallback": "token:nord",
	});
}

export default Component;
