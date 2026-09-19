import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/du2enid9n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="du2enid9n"/>`,
		"fallback": "hugeicons:remove-formatting",
	});
}

export default Component;
