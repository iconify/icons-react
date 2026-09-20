import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0rps9g9q.css';
import '../../css/h/h4-ochb-m.css';
import '../../css/s/st8u5pbuo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c0rps9g9q"/><path clip-rule="evenodd" class="h4-ochb-m"/><path clip-rule="evenodd" class="st8u5pbuo"/></g>`,
		"fallback": "streamline-flex-color:tune-adjust-volume-flat",
	});
}

export default Component;
