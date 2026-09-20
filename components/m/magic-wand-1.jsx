import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr7fw4btp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr7fw4btp"/>`,
		"fallback": "streamline-flex:magic-wand-1",
	});
}

export default Component;
