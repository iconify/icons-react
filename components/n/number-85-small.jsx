import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gggjqlrin.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gggjqlrin"/>`,
		"fallback": "tabler:number-85-small",
	});
}

export default Component;
