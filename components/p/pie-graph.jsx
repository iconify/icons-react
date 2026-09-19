import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvklctb1s.css';
import '../../css/h/hck-_bb5b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvklctb1s"/><path class="hck-_bb5b"/>`,
		"fallback": "ion:pie-graph",
	});
}

export default Component;
