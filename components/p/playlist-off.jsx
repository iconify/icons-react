import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub_swd5sd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub_swd5sd"/>`,
		"fallback": "tabler:playlist-off",
	});
}

export default Component;
