import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzk6tjbbd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzk6tjbbd"/>`,
		"fallback": "f7:sun-max",
	});
}

export default Component;
