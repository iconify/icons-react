import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/d/dbdv4-s3k.css';
import '../../css/i/imsm6rm0q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="dbdv4-s3k"/><path class="imsm6rm0q"/></g>`,
		"fallback": "mynaui:trees",
	});
}

export default Component;
