import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szt_gcbue.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="szt_gcbue"/>`,
		"fallback": "ant-design:radius-bottomleft-outlined",
	});
}

export default Component;
