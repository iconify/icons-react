import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjcfnu1xo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjcfnu1xo"/>`,
		"fallback": "sidekickicons:lock-semi-open-solid",
	});
}

export default Component;
