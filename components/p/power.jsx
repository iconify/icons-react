import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl72jlb_c.css';
import '../../css/n/n6ltouozm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl72jlb_c"/><path class="n6ltouozm"/>`,
		"fallback": "withicons-bauhaus:power",
	});
}

export default Component;
