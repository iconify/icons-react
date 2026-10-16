import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9ybb-cwt.css';
import '../../css/y/yfzrx8bbn.css';
import '../../css/h/h461_iiso.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n9ybb-cwt"><path class="yfzrx8bbn"/><path class="h461_iiso"/></g>`,
		"fallback": "thesvg-color:shlink",
	});
}

export default Component;
