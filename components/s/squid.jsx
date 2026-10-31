import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le9u54-7e.css';
import '../../css/t/t4fmldbqy.css';
import '../../css/z/zoa_b5bnt.css';
import '../../css/s/slrtfiplt.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le9u54-7e"/><path class="t4fmldbqy"/><path class="zoa_b5bnt"/><path class="slrtfiplt"/>`,
		"fallback": "iconito:squid",
	});
}

export default Component;
