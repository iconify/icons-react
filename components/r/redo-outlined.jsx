import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hstsr7bhc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hstsr7bhc"/>`,
		"fallback": "ant-design:redo-outlined",
	});
}

export default Component;
