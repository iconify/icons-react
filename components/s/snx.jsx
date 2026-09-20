import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i2qwjtp6x.css';
import '../../css/n/n3zvsabum.css';
import '../../css/l/l3c5_9blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i2qwjtp6x"/><path class="n3zvsabum"/><path class="l3c5_9blk"/>`,
		"fallback": "token:snx",
	});
}

export default Component;
