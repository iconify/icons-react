import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cl66i7bqg.css';
import '../../css/x/x-5f2htjo.css';
import '../../css/x/xa2k-bcvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="cl66i7bqg"/><path class="x-5f2htjo"/><path class="xa2k-bcvw"/>`,
		"fallback": "solar:minimalistic-magnifier-zoom-in-bold-duotone",
	});
}

export default Component;
