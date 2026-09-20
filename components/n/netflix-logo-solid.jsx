import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzqnoccyv.css';
import '../../css/z/z91rwbb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzqnoccyv"/><path clip-rule="evenodd" class="z91rwbb8x"/>`,
		"fallback": "streamline-logos:netflix-logo-solid",
	});
}

export default Component;
