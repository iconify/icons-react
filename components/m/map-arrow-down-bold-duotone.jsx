import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4brlnqpx.css';
import '../../css/b/bpeho1s8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4brlnqpx"/><path class="bpeho1s8l"/>`,
		"fallback": "solar:map-arrow-down-bold-duotone",
	});
}

export default Component;
