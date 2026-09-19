import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn54ed63y.css';
import '../../css/c/c1h1m6bmx.css';
import '../../css/p/pybd_506k.css';
import '../../css/h/h6xbz7t5j.css';
import '../../css/w/w7bygdcze.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn54ed63y"/><path class="c1h1m6bmx"/><path class="pybd_506k"/><path class="h6xbz7t5j"/><path class="w7bygdcze"/>`,
		"fallback": "devicon:java",
	});
}

export default Component;
