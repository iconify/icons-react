import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bar-u5a1j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bar-u5a1j"/>`,
		"fallback": "ant-design:skin-fill",
	});
}

export default Component;
