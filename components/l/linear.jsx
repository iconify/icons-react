import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zeu5_na5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zeu5_na5x"/>`,
		"fallback": "gg:linear",
	});
}

export default Component;
