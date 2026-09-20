import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s9-zd4t5z.css';
import '../../css/f/fazgwxb1l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s9-zd4t5z"/><path class="fazgwxb1l"/></g>`,
		"fallback": "tdesign:list-bug",
	});
}

export default Component;
