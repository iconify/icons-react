import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5syj6ckj.css';
import '../../css/t/t5lhdhbbj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5syj6ckj"/><path class="t5lhdhbbj"/>`,
		"fallback": "token:soul",
	});
}

export default Component;
