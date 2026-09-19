import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snfd_jbqj.css';
import '../../css/d/d7v_hcc-g.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snfd_jbqj"/><path class="d7v_hcc-g"/>`,
		"fallback": "ion:pricetag-outline",
	});
}

export default Component;
