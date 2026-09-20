import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4gbwvw2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4gbwvw2l"/>`,
		"fallback": "tabler:number-100-small",
	});
}

export default Component;
