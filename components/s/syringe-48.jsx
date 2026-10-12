import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9gjhw_ll.css';
import '../../css/b/bfn8irqrh.css';
import '../../css/z/zyce2wqev.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y9gjhw_ll"/><path class="bfn8irqrh"/><path class="zyce2wqev"/>`,
		"fallback": "energy-icons:syringe-48",
	});
}

export default Component;
