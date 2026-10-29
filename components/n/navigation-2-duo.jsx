import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/ss8wgib8a.css';
import '../../css/a/a-n0l-b-j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ss8wgib8a"/><path class="a-n0l-b-j"/></g>`,
		"fallback": "withicons:navigation-2-duo",
	});
}

export default Component;
