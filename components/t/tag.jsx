import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bhc54hbav.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bhc54hbav"/>`,
		"fallback": "ant-design:tag",
	});
}

export default Component;
