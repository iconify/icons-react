import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lawl0y4tm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lawl0y4tm"/>`,
		"fallback": "iconoir:maps-go-straight",
	});
}

export default Component;
