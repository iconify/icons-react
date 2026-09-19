import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u8g5bw7_a.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u8g5bw7_a"/>`,
		"fallback": "fa-regular:share-square",
	});
}

export default Component;
