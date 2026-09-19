import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/liqi8irpe.css';
import '../../css/h/hejk39zyq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="liqi8irpe"/><circle class="hejk39zyq"/>`,
		"fallback": "ion:ionic",
	});
}

export default Component;
