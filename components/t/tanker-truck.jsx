import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/z/z8hbo-a-t.css';
import '../../css/a/a6pgc3car.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="z8hbo-a-t"/><path class="a6pgc3car"/></g>`,
		"fallback": "hugeicons:tanker-truck",
	});
}

export default Component;
