import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rqp835bas.css';
import '../../css/z/zz538uboq.css';
import '../../css/a/a_rdqgb1f.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rqp835bas"/><path class="zz538uboq"/><path class="a_rdqgb1f"/>`,
		"fallback": "energy-icons:kite-20-bold",
	});
}

export default Component;
