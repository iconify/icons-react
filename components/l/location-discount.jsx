import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-7dymb5j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-7dymb5j"/>`,
		"fallback": "tabler:location-discount",
	});
}

export default Component;
