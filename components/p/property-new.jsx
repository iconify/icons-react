import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw-5i4bdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw-5i4bdg"/>`,
		"fallback": "hugeicons:property-new",
	});
}

export default Component;
