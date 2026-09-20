import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbi5g97mr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbi5g97mr"/>`,
		"fallback": "tabler:radioactive-off",
	});
}

export default Component;
