import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/txh3d43br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="txh3d43br"/>`,
		"fallback": "keyline-icons:square-duotone",
	});
}

export default Component;
