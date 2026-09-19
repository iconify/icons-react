import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_ah_3bjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_ah_3bjy"/>`,
		"fallback": "hugeicons:pointing-left-03",
	});
}

export default Component;
