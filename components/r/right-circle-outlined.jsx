import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqhadvbgp.css';
import '../../css/y/yv_brepse.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqhadvbgp"/><path class="yv_brepse"/>`,
		"fallback": "ant-design:right-circle-outlined",
	});
}

export default Component;
