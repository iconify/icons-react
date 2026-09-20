import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j9m6urblh.css';
import '../../css/u/uqb-_iblt.css';
import '../../css/t/tnrg1vfjo.css';
import '../../css/b/b7yq6dbnh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j9m6urblh"/><path class="uqb-_iblt"/><path class="tnrg1vfjo"/><path class="b7yq6dbnh"/>`,
		"fallback": "selfhst:microsoft-word-dark",
	});
}

export default Component;
