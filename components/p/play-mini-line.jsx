import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi76c70-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi76c70-f"/>`,
		"fallback": "ri:play-mini-line",
	});
}

export default Component;
