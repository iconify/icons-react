import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcc_rab_e.css';
import '../../css/b/b916efb9j.css';
import '../../css/w/w6jofhbjh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="kcc_rab_e"/><path class="b916efb9j"/><path class="w6jofhbjh"/>`,
		"fallback": "ion:social-instagram",
	});
}

export default Component;
