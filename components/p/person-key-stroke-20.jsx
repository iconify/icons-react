import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfebi87jj.css';
import '../../css/x/x52zq4crp.css';
import '../../css/j/jqbyuib6u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfebi87jj"/><path class="x52zq4crp"/><path class="jqbyuib6u"/>`,
		"fallback": "garden:person-key-stroke-20",
	});
}

export default Component;
