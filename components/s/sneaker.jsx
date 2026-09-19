import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ncqe51j2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ncqe51j2c"/>`,
		"fallback": "boxicons:sneaker",
	});
}

export default Component;
