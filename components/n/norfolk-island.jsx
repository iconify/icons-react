import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8b3c1bgc.css';
import '../../css/m/md2v-t2ws.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8b3c1bgc"/><path class="md2v-t2ws"/>`,
		"fallback": "tabler-flags:norfolk-island",
	});
}

export default Component;
