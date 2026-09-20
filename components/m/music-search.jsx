import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjn3wobdy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjn3wobdy"/>`,
		"fallback": "tabler:music-search",
	});
}

export default Component;
