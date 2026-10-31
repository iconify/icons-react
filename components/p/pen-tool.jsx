import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/lryctbccs.css';
import '../../css/i/iv7ukhb8n.css';
import '../../css/x/xxutnhb6o.css';
import '../../css/x/xwvuugy7n.css';
import '../../css/s/s_aaoy9gm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="lryctbccs wm-shadow"/><path class="iv7ukhb8n wm-shadow"/><path class="xxutnhb6o"/><path class="xwvuugy7n"/><path class="s_aaoy9gm"/></g>`,
		"fallback": "withicons-brutal:pen-tool",
	});
}

export default Component;
