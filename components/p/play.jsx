import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrl42bkxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrl42bkxj"/>`,
		"fallback": "vadivam:play",
	});
}

export default Component;
