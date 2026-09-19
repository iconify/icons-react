import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/s/so2vopsuu.css';
import '../../css/m/m4l7k4ntf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="so2vopsuu"/><path class="m4l7k4ntf"/></g>`,
		"fallback": "iconamoon:sign-division-duotone",
	});
}

export default Component;
