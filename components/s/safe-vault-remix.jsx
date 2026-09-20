import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/znvulxk8j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="znvulxk8j"/>`,
		"fallback": "streamline-flex:safe-vault-remix",
	});
}

export default Component;
