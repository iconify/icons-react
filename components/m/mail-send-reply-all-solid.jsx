import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fva8p8ufs.css';
import '../../css/u/u9tojb6xh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fva8p8ufs"/><path class="u9tojb6xh"/>`,
		"fallback": "streamline-plump:mail-send-reply-all-solid",
	});
}

export default Component;
