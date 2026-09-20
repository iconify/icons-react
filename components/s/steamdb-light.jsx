import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vcfac8bxc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vcfac8bxc"/>`,
		"fallback": "selfhst:steamdb-light",
	});
}

export default Component;
