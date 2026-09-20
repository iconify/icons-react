import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bplqn1p5z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bplqn1p5z"/>`,
		"fallback": "streamline-logos:newsvine-logo-block",
	});
}

export default Component;
