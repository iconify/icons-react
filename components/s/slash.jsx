import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/ueef18k6a.css';
import '../../css/m/m4l-9ybuj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ueef18k6a"/><circle class="m4l-9ybuj"/></g>`,
		"fallback": "mynaui:slash",
	});
}

export default Component;
