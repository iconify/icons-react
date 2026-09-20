import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmhuaub_w.css';
import '../../css/o/ofyg4tbzj.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmhuaub_w"/><path class="ofyg4tbzj"/>`,
		"fallback": "temaki:manhole",
	});
}

export default Component;
