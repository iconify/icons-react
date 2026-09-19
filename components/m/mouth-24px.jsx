import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cj4g1vdjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cj4g1vdjp"/>`,
		"fallback": "healthicons:mouth-24px",
	});
}

export default Component;
