import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7gs-30zl.css';
import '../../css/h/h-sadvblf.css';
import '../../css/s/spu04ibth.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7gs-30zl"/><path class="h-sadvblf"/><path class="spu04ibth"/>`,
		"fallback": "energy-icons:kite-48",
	});
}

export default Component;
