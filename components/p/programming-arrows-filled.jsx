import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ada492bgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ada492bgg"/>`,
		"fallback": "reicon:programming-arrows-filled",
	});
}

export default Component;
