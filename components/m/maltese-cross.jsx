import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nehmr7u7k.css';
import '../../css/d/d1xosacnr.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nehmr7u7k"/><path class="d1xosacnr"/>`,
		"fallback": "tabler-flags:maltese-cross",
	});
}

export default Component;
