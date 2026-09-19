import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aoz0_bc9u.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aoz0_bc9u"/>`,
		"fallback": "ant-design:shake-outline",
	});
}

export default Component;
