import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/auooq3bgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="auooq3bgs"/>`,
		"fallback": "bxs:polygon",
	});
}

export default Component;
