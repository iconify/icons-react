import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v9x430b2o.css';
import '../../css/z/zej4-xbdd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v9x430b2o"/><path class="zej4-xbdd"/></g>`,
		"fallback": "glyphs-poly:lock-open-1",
	});
}

export default Component;
