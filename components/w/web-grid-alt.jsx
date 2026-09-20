import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5kja2bmt.css';
import '../../css/q/qv0ny4dca.css';
import '../../css/d/dboargo5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5kja2bmt"/><path class="qv0ny4dca"/><path class="dboargo5b"/>`,
		"fallback": "uim:web-grid-alt",
	});
}

export default Component;
