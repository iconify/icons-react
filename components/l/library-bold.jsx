import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c3_gtob6t.css';
import '../../css/p/p9-9dkipc.css';
import '../../css/u/u4839bbhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c3_gtob6t"/><path class="p9-9dkipc"/><path clip-rule="evenodd" class="u4839bbhx"/>`,
		"fallback": "solar:library-bold",
	});
}

export default Component;
