import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgr11cbcv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgr11cbcv"/>`,
		"fallback": "tabler:number-47-small",
	});
}

export default Component;
