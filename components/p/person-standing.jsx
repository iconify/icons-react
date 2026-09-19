import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/zka7ihdcz.css';
import '../../css/f/fskbs36-o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="zka7ihdcz"/><path class="fskbs36-o"/></g>`,
		"fallback": "hugeicons:person-standing",
	});
}

export default Component;
