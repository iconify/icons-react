import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/k6if4kh4a.css';
import '../../css/j/jkl-rmw7j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="k6if4kh4a"/><path class="jkl-rmw7j"/></g>`,
		"fallback": "streamline-sharp-color:rabbit",
	});
}

export default Component;
