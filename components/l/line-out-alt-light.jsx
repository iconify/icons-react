import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/p/p5smuv1fx.css';
import '../../css/i/il0pwlb6n.css';
import '../../css/z/zimgjfjhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><rect transform="rotate(90 9 15)" class="p5smuv1fx"/><path class="il0pwlb6n"/><path class="zimgjfjhx"/></g>`,
		"fallback": "lets-icons:line-out-alt-light",
	});
}

export default Component;
