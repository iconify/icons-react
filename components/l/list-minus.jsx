import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zs5l9tbhg.css';
import '../../css/y/ys0s8unky.css';
import '../../css/a/as9i7h0ds.css';
import '../../css/f/fqeyirbjk.css';
import '../../css/z/z6463wkhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wm-shadow zs5l9tbhg"/><path class="wm-k ys0s8unky"/><path class="as9i7h0ds wm-k"/><path class="fqeyirbjk wm-s"/><path class="wm-s z6463wkhg"/>`,
		"fallback": "withicons-pastel:list-minus",
	});
}

export default Component;
