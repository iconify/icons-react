import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/p/p-5evnx4b.css';
import '../../css/o/o40lrnbfe.css';
import '../../css/g/gt1irsbye.css';
import '../../css/c/cvkdx-b0d.css';
import '../../css/t/tdvnu8b0b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><rect class="p-5evnx4b"/><path class="o40lrnbfe"/><path class="gt1irsbye"/><path class="cvkdx-b0d"/><path class="tdvnu8b0b"/></g>`,
		"fallback": "icon-park:table",
	});
}

export default Component;
