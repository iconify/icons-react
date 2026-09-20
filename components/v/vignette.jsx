import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a3_jm0-sn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a3_jm0-sn"/>`,
		"fallback": "tabler:vignette",
	});
}

export default Component;
