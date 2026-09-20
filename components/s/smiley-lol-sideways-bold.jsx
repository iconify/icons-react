import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejos-9bsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejos-9bsq"/>`,
		"fallback": "streamline-ultimate:smiley-lol-sideways-bold",
	});
}

export default Component;
