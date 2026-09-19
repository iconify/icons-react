import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpwc0-b4d.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpwc0-b4d"/>`,
		"fallback": "ant-design:tags-outlined",
	});
}

export default Component;
