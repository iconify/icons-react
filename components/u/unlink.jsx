import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emm5k3-xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b emm5k3-xc"/>`,
		"fallback": "boxicons:unlink",
	});
}

export default Component;
