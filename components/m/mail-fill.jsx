import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/um5hbmb3j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="um5hbmb3j"/>`,
		"fallback": "ant-design:mail-fill",
	});
}

export default Component;
