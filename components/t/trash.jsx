import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/sz2xy3_xw.css';
import '../../css/i/ih7xeac7q.css';
import '../../css/z/zu-pgi72i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="sz2xy3_xw"/><path class="ih7xeac7q"/><path class="zu-pgi72i"/></g>`,
		"fallback": "matita:trash",
	});
}

export default Component;
