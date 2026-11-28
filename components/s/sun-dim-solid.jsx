import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zac9grbfu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zac9grbfu"/>`,
		"fallback": "iconaut:sun-dim-solid",
	});
}

export default Component;
