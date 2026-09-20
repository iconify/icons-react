import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/e/eki8pkf3u.css';
import '../../css/s/s3ocqmhzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="eki8pkf3u"/><path class="s3ocqmhzl"/></g>`,
		"fallback": "mynaui:toggle-left",
	});
}

export default Component;
