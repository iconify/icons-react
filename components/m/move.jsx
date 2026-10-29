import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dd-_aub3g.css';
import '../../css/f/fss4rybej.css';
import '../../css/i/ia58y6bdf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dd-_aub3g wm-k"/><path class="fss4rybej wm-a"/><path class="ia58y6bdf wm-a"/>`,
		"fallback": "withicons-bauhaus:move",
	});
}

export default Component;
