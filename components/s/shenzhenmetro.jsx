import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbo_ocb7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbo_ocb7x"/>`,
		"fallback": "simple-icons:shenzhenmetro",
	});
}

export default Component;
