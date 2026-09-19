import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9r4z__4k.css';
import '../../css/z/z8e8kub5u.css';
import '../../css/g/gq7xqhlwu.css';
import '../../css/o/o6k2-ibor.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9r4z__4k"/><path class="z8e8kub5u"/><circle class="gq7xqhlwu"/><path class="o6k2-ibor"/>`,
		"fallback": "carbon:wave-direction",
	});
}

export default Component;
