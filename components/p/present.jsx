import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlbcxttud.css';
import '../../css/b/b3qn-8h1z.css';
import '../../css/t/t_j61bbmi.css';
import '../../css/j/jded-0bwd.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlbcxttud"/><path class="b3qn-8h1z"/><path class="t_j61bbmi"/><path class="jded-0bwd"/>`,
		"fallback": "ep:present",
	});
}

export default Component;
