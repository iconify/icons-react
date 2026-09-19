import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sd8or5nik.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sd8or5nik"/>`,
		"fallback": "ant-design:unlock-outlined",
	});
}

export default Component;
