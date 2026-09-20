import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jzmusacjq.css';
import '../../css/k/ks466_bpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jzmusacjq"/><path class="ks466_bpq"/>`,
		"fallback": "token:moov",
	});
}

export default Component;
