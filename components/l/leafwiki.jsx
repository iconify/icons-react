import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z52dv641c.css';
import '../../css/x/xj4e8-rbm.css';
import '../../css/z/z98gm69xh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z52dv641c"/><path class="xj4e8-rbm"/><path class="z98gm69xh"/>`,
		"fallback": "selfhst:leafwiki",
	});
}

export default Component;
