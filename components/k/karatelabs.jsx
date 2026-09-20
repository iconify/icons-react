import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypy0npbna.css';
import '../../css/g/g0uat02ht.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypy0npbna"/><path class="g0uat02ht"/>`,
		"fallback": "thesvg-color:karatelabs",
	});
}

export default Component;
