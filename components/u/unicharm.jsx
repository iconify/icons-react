import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b2a-tdbwz.css';
import '../../css/g/gqibrxbyv.css';
import '../../css/a/a8dbi7zcs.css';

const viewBox = {"width":1595,"height":1596};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b2a-tdbwz"/><path class="gqibrxbyv"/><path class="a8dbi7zcs"/>`,
		"fallback": "thesvg-color:unicharm",
	});
}

export default Component;
