import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzzpno9do.css';
import '../../css/i/ikevykbev.css';
import '../../css/f/fx3kptb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzzpno9do"/><path class="ikevykbev"/><path class="fx3kptb3j"/>`,
		"fallback": "token:mpl",
	});
}

export default Component;
