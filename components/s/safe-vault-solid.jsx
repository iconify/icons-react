import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrl9mxa-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yrl9mxa-e"/>`,
		"fallback": "streamline-sharp:safe-vault-solid",
	});
}

export default Component;
