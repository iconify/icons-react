import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtc8mk_md.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtc8mk_md"/>`,
		"fallback": "streamline-logos:slash-dot-logo",
	});
}

export default Component;
