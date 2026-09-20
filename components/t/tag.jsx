import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ocxtnncco.css';
import '../../css/f/fb07yqbmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ocxtnncco"/><path class="fb07yqbmq"/>`,
		"fallback": "pixel:tag",
	});
}

export default Component;
