import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8spygx2w.css';
import '../../css/f/fkn2szbqo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8spygx2w"/><path class="fkn2szbqo"/>`,
		"fallback": "energy-icons:rack-and-pinion-48-bold",
	});
}

export default Component;
