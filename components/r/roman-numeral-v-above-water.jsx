import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ur_1lrlwq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ur_1lrlwq"/>`,
		"fallback": "pinhead:roman-numeral-v-above-water",
	});
}

export default Component;
