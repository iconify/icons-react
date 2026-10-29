import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z5qk11bvl.css';
import '../../css/g/gvgnzkbfz.css';
import '../../css/f/f4hzekbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k z5qk11bvl"/><path class="gvgnzkbfz wm-k"/><path class="f4hzekbll wm-k"/></g>`,
		"fallback": "withicons-anime:sigma",
	});
}

export default Component;
