import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iexu7sdoc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iexu7sdoc"/>`,
		"fallback": "bxs:pencil",
	});
}

export default Component;
