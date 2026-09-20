import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzpc1o6iu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dzpc1o6iu"/>`,
		"fallback": "streamline-plump:recycle-bin-remix",
	});
}

export default Component;
