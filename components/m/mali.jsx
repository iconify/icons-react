import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jwr0h7biq.css';
import '../../css/x/xcnr5ab-g.css';
import '../../css/t/t2w8mls_d.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jwr0h7biq"/><path class="xcnr5ab-g"/><path class="t2w8mls_d"/>`,
		"fallback": "tabler-flags:mali",
	});
}

export default Component;
