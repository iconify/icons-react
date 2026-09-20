import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eb8nn8bbk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eb8nn8bbk"/>`,
		"fallback": "tdesign:no-expression-filled",
	});
}

export default Component;
