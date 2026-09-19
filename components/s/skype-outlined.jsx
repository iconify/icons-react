import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thndgcb3e.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thndgcb3e"/>`,
		"fallback": "ant-design:skype-outlined",
	});
}

export default Component;
