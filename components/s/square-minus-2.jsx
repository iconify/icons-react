import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk_28bbzg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk_28bbzg"/>`,
		"fallback": "tabler:square-minus-2",
	});
}

export default Component;
