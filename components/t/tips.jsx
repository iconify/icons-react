import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/z/zs52e4mee.css';
import '../../css/z/zl7ny6enc.css';
import '../../css/u/utflk3b0j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="zs52e4mee"/><path class="zl7ny6enc"/><path class="utflk3b0j"/></g>`,
		"fallback": "icon-park:tips",
	});
}

export default Component;
