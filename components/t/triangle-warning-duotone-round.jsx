import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kds04kq-i.css';
import '../../css/l/lx3sgx5wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kds04kq-i"/><path class="lx3sgx5wg"/></g>`,
		"fallback": "coolicons:triangle-warning-duotone-round",
	});
}

export default Component;
