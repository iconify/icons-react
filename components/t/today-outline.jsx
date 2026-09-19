import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zvtzd3b0t.css';
import '../../css/j/jxpdhoeop.css';
import '../../css/z/zk3b7wb-z.css';
import '../../css/p/p-c8nc-9e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="zvtzd3b0t"/><path class="jxpdhoeop"/><rect class="zk3b7wb-z"/><path class="p-c8nc-9e"/>`,
		"fallback": "ion:today-outline",
	});
}

export default Component;
