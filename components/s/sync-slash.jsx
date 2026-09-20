import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9zs5b_ml.css';
import '../../css/y/ymqqe9y8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9zs5b_ml"/><path class="ymqqe9y8q"/>`,
		"fallback": "uim:sync-slash",
	});
}

export default Component;
