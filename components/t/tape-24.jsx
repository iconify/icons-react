import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcazjrb0e.css';
import '../../css/c/c_yj0tdow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zcazjrb0e"/><path clip-rule="evenodd" class="c_yj0tdow"/>`,
		"fallback": "qlementine-icons:tape-24",
	});
}

export default Component;
