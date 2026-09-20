import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fgk6cguxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fgk6cguxp"/>`,
		"fallback": "thesvg:sonarr",
	});
}

export default Component;
