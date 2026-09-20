import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/c/c09fl3b6m.css';
import '../../css/d/de6f2tb6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="c09fl3b6m"/><path class="de6f2tb6n"/></g>`,
		"fallback": "mage:thumbs-up",
	});
}

export default Component;
