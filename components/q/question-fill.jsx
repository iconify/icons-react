import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zku8iz88p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zku8iz88p"/>`,
		"fallback": "akar-icons:question-fill",
	});
}

export default Component;
