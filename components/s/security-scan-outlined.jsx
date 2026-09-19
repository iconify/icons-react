import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npg94ubpf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="npg94ubpf"/>`,
		"fallback": "ant-design:security-scan-outlined",
	});
}

export default Component;
