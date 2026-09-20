import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/r601jub5a.css';
import '../../css/z/z90ol3baz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="r601jub5a"/><path vector-effect="non-scaling-stroke" class="z90ol3baz"/></g>`,
		"fallback": "wordpress:unseen",
	});
}

export default Component;
