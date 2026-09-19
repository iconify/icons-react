import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxpcs_bus.css';
import '../../css/n/ndyez317g.css';
import '../../css/o/o_qzz2bfh.css';
import '../../css/o/o5a6febyh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cxpcs_bus"/><path class="ndyez317g"/><path class="o_qzz2bfh"/><circle class="o5a6febyh"/>`,
		"fallback": "flag:ne-1x1",
	});
}

export default Component;
