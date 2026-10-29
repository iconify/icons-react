import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h83a2chhh.css';
import '../../css/o/oncz_d6_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h83a2chhh"/><path class="oncz_d6_l"/>`,
		"fallback": "withicons-bauhaus:tag",
	});
}

export default Component;
