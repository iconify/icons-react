import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/maggq5byx.css';
import '../../css/p/ph-tdvwvh.css';
import '../../css/d/dz9auwwmv.css';

const viewBox = {"width":640,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="maggq5byx"/><path class="ph-tdvwvh"/><circle class="dz9auwwmv"/>`,
		"fallback": "flag:mk-4x3",
	});
}

export default Component;
