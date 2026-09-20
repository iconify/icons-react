import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lqg3dybyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lqg3dybyg"/>`,
		"fallback": "tabler:password-mobile-phone",
	});
}

export default Component;
