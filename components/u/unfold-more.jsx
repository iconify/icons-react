import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fymhyv7jk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fymhyv7jk"/>`,
		"fallback": "tdesign:unfold-more",
	});
}

export default Component;
