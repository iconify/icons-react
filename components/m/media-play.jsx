import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyr_hyy0g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyr_hyy0g"/>`,
		"fallback": "nrk:media-play",
	});
}

export default Component;
