import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tz3lfhbgh.css';
import '../../css/s/s00tgrb-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tz3lfhbgh"/><path class="s00tgrb-l"/></g>`,
		"fallback": "evicons:report-fault",
	});
}

export default Component;
