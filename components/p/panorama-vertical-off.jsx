import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwryu69jf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwryu69jf"/>`,
		"fallback": "tabler:panorama-vertical-off",
	});
}

export default Component;
