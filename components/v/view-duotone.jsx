import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yi36msbhq.css';
import '../../css/u/uzm3_fbfh.css';
import '../../css/a/a2wio1sog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yi36msbhq"/><path class="uzm3_fbfh"/><path class="a2wio1sog"/></g>`,
		"fallback": "lucide-extended:view-duotone",
	});
}

export default Component;
