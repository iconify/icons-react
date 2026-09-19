import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o17-5bbuc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o17-5bbuc"/>`,
		"fallback": "ant-design:snippets-filled",
	});
}

export default Component;
