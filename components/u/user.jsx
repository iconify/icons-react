import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zkv-t7b6i.css';
import '../../css/t/tcwe4ewrv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="zkv-t7b6i"/><circle class="tcwe4ewrv"/></g>`,
		"fallback": "feather:user",
	});
}

export default Component;
