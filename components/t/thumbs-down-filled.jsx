import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy4-bn.css';
import '../../css/t/t7y_kz.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-from-76.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy4-bn"/><path class="t7y_kz"/>`,
		"fallback": "line-md:thumbs-down-filled",
	});
}

export default Component;
