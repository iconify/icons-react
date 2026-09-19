import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/asf0t-lpg.css';
import '../../css/w/whodvvt6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="asf0t-lpg"/><path class="whodvvt6a"/></g>`,
		"fallback": "hugeicons:quill-write-01",
	});
}

export default Component;
