import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw_cjjfhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw_cjjfhw"/>`,
		"fallback": "tabler:omega",
	});
}

export default Component;
