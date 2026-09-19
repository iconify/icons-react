import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vai2b4bfw.css';
import '../../css/s/s4lttrqws.css';
import '../../css/w/wzn6zhbvq.css';
import '../../css/t/tu54racff.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vai2b4bfw"/><g class="s4lttrqws"><path class="wzn6zhbvq"/><path class="tu54racff"/></g>`,
		"fallback": "catppuccin:lua-server",
	});
}

export default Component;
