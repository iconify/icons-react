import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/laz9y4bgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="laz9y4bgs"/>`,
		"fallback": "griddy-icons:radar-alt-01",
	});
}

export default Component;
