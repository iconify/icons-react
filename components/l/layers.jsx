import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjf68__wr.css';
import '../../css/s/slmsaib5j.css';
import '../../css/x/x0g-2fbkx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjf68__wr"/><path class="slmsaib5j"/><path class="x0g-2fbkx"/>`,
		"fallback": "cil:layers",
	});
}

export default Component;
