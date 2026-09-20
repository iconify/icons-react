import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-yo71rqa.css';
import '../../css/o/od9ez2buj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-yo71rqa"/><path class="od9ez2buj"/>`,
		"fallback": "stash:payment-link-duotone",
	});
}

export default Component;
