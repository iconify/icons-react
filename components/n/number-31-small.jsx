import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9fplgbxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9fplgbxz"/>`,
		"fallback": "tabler:number-31-small",
	});
}

export default Component;
