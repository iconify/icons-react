import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut7y1yr2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut7y1yr2k"/>`,
		"fallback": "tabler:number-22-small",
	});
}

export default Component;
