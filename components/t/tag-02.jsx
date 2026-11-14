import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sdjhl_02i.css';
import '../../css/h/hzwc_3pcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sdjhl_02i"/><path class="hzwc_3pcq"/></g>`,
		"fallback": "hugeicons:tag-02",
	});
}

export default Component;
