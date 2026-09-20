import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lphvcgben.css';
import '../../css/m/m2r9rjb4e.css';
import '../../css/o/o7yyb8b0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lphvcgben"/><path class="m2r9rjb4e"/><path class="o7yyb8b0j"/>`,
		"fallback": "streamline-ultimate:video-file-star-bold",
	});
}

export default Component;
