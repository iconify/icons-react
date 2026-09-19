import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gk81qx38q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gk81qx38q"/>`,
		"fallback": "humbleicons:lock-open",
	});
}

export default Component;
