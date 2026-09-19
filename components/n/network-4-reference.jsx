import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jh-18tbsw.css';
import '../../css/f/ftv6d47py.css';
import '../../css/l/l-ba9qber.css';
import '../../css/d/dertp7bua.css';
import '../../css/r/r-r5xdlfr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jh-18tbsw"/><path class="ftv6d47py"/><circle class="l-ba9qber"/><circle class="dertp7bua"/><path class="r-r5xdlfr"/>`,
		"fallback": "carbon:network-4-reference",
	});
}

export default Component;
