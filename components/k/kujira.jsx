import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sy7nfem9n.css';
import '../../css/w/wgkp86hhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sy7nfem9n"/><path class="wgkp86hhr"/>`,
		"fallback": "token:kujira",
	});
}

export default Component;
