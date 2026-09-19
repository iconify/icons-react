import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnl0g-byb.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnl0g-byb"/>`,
		"fallback": "ant-design:vertical-align-bottom-outline",
	});
}

export default Component;
