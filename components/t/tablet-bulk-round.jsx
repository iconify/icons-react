import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b87657bsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b87657bsl"/>`,
		"fallback": "coolicons:tablet-bulk-round",
	});
}

export default Component;
