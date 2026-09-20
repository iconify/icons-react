import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g2il74gel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g2il74gel"/>`,
		"fallback": "thesvg-color:umbrel",
	});
}

export default Component;
