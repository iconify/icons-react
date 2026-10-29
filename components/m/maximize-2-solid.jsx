import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kaq68ebxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kaq68ebxo"/>`,
		"fallback": "withicons:maximize-2-solid",
	});
}

export default Component;
