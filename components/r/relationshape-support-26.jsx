import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn_xmxb3g.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn_xmxb3g"/>`,
		"fallback": "garden:relationshape-support-26",
	});
}

export default Component;
