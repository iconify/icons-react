import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/d5wgp4bfy.css';
import '../../css/g/gu5hqxbkc.css';
import '../../css/l/lrfx45bzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="d5wgp4bfy"/><path class="gu5hqxbkc"/><path class="lrfx45bzy"/></g>`,
		"fallback": "streamline-freehand:paginate-filter-music",
	});
}

export default Component;
