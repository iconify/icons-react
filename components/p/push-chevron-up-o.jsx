import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bob346bis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bob346bis"/>`,
		"fallback": "gg:push-chevron-up-o",
	});
}

export default Component;
