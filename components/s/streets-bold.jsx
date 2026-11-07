import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-e9pdl7a.css';
import '../../css/v/vnqotyhmz.css';
import '../../css/j/jb__gobaz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-e9pdl7a"/><path class="vnqotyhmz"/><path class="jb__gobaz"/>`,
		"fallback": "solar:streets-bold",
	});
}

export default Component;
