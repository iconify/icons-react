import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxst_t7um.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxst_t7um"/>`,
		"fallback": "simple-icons:sphinx",
	});
}

export default Component;
