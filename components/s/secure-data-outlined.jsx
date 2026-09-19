import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ci5kv5b4d.css';
import '../../css/h/hd-ff83io.css';
import '../../css/z/zq_37wb4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ci5kv5b4d"/><path class="hd-ff83io"/><path class="zq_37wb4u"/>`,
		"fallback": "eos-icons:secure-data-outlined",
	});
}

export default Component;
