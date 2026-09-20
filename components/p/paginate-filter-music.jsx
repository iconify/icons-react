import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/l/l6a6v_m7k.css';
import '../../css/j/j0kx2gbuw.css';
import '../../css/i/i71k519nu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="l6a6v_m7k"/><path class="j0kx2gbuw"/><path class="i71k519nu"/></g>`,
		"fallback": "streamline-freehand-color:paginate-filter-music",
	});
}

export default Component;
