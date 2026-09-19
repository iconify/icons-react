import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-8ehqo7a.css';
import '../../css/o/o2uqidcof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-8ehqo7a"/><path clip-rule="evenodd" class="o2uqidcof"/>`,
		"fallback": "basil:toggle-off-outline",
	});
}

export default Component;
