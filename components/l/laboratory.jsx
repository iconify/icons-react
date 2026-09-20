import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k19k3sbft.css';
import '../../css/v/v2uff_sgc.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k19k3sbft"/><path class="v2uff_sgc"/>`,
		"fallback": "medical-icon:laboratory",
	});
}

export default Component;
