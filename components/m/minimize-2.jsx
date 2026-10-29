import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/v4up8jrir.css';
import '../../css/k/kr-9nqi8d.css';
import '../../css/r/rr3e9gbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="v4up8jrir"/><path class="kr-9nqi8d"/><path class="rr3e9gbit"/></g>`,
		"fallback": "withicons-bauhaus:minimize-2",
	});
}

export default Component;
