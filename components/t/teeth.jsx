import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytycylhqe.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytycylhqe"/>`,
		"fallback": "fa6-solid:teeth",
	});
}

export default Component;
