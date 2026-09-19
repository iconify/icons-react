import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-z42tc9g.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-z42tc9g"/>`,
		"fallback": "ant-design:line-height-outlined",
	});
}

export default Component;
