import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ara2u6bia.css';
import '../../css/g/g1ssb8box.css';
import '../../css/p/ps_nwu9ub.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ara2u6bia"/><path class="g1ssb8box"/><path class="ps_nwu9ub"/>`,
		"fallback": "ion:md-podium",
	});
}

export default Component;
