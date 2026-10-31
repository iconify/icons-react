import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mok_4qi5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mok_4qi5a"/>`,
		"fallback": "coolicons:list-filter-duotone-round",
	});
}

export default Component;
