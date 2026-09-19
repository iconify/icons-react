import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj9htxb2j.css';
import '../../css/q/qjl0smrdw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj9htxb2j"/><path class="qjl0smrdw"/>`,
		"fallback": "ion:ios-grid",
	});
}

export default Component;
