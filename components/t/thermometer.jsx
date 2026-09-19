import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bzn-x-bxq.css';
import '../../css/j/j-3o0026v.css';
import '../../css/x/x9mz11vee.css';
import '../../css/w/w34yq1bdg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bzn-x-bxq"/><path class="j-3o0026v"/><ellipse class="x9mz11vee"/><path class="w34yq1bdg"/>`,
		"fallback": "fxemoji:thermometer",
	});
}

export default Component;
