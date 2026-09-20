import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gb9xe1bqq.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gb9xe1bqq"/>`,
		"fallback": "jam:phone",
	});
}

export default Component;
