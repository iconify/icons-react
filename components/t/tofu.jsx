import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0b1pobvd.css';
import '../../css/n/nxk669c7l.css';
import '../../css/g/g147opbuc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g display="block"><path class="b0b1pobvd"/><path class="nxk669c7l"/><path class="g147opbuc"/></g>`,
		"fallback": "iconito:tofu",
	});
}

export default Component;
