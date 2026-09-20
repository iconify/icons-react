import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nr7wbsbom.css';
import '../../css/x/xlp5pbcfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nr7wbsbom"/><path class="xlp5pbcfx"/>`,
		"fallback": "token:metis",
	});
}

export default Component;
