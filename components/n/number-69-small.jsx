import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw5mhy1wu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw5mhy1wu"/>`,
		"fallback": "tabler:number-69-small",
	});
}

export default Component;
