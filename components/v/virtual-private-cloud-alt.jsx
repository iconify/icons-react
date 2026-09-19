import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_ck-kb7o.css';
import '../../css/k/kyehcvbsc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_ck-kb7o"/><path class="kyehcvbsc"/>`,
		"fallback": "carbon:virtual-private-cloud-alt",
	});
}

export default Component;
