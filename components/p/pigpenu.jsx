import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n6_jcg88n.css';

const viewBox = {"width":1026,"height":1028};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n6_jcg88n"/>`,
		"fallback": "whh:pigpenu",
	});
}

export default Component;
