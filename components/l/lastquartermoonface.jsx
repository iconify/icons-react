import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykltvrbat.css';
import '../../css/l/l6dxx07jx.css';
import '../../css/f/f9qpihbxq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykltvrbat"/><path class="l6dxx07jx"/><path class="f9qpihbxq"/>`,
		"fallback": "fxemoji:lastquartermoonface",
	});
}

export default Component;
