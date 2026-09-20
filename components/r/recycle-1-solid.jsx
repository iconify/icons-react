import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qo6l-bcgd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qo6l-bcgd"/>`,
		"fallback": "streamline-plump:recycle-1-solid",
	});
}

export default Component;
