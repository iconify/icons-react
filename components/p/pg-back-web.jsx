import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/budvc5b6l.css';
import '../../css/e/e98i9obai.css';
import '../../css/t/t_qhaj-wh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="budvc5b6l"/><path class="e98i9obai"/><path class="t_qhaj-wh"/>`,
		"fallback": "selfhst:pg-back-web",
	});
}

export default Component;
