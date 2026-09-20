import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evfd4hbar.css';
import '../../css/l/lt9r55aoa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evfd4hbar"/><path class="lt9r55aoa"/>`,
		"fallback": "pixel:startups",
	});
}

export default Component;
