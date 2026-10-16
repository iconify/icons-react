import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/supgx2bpn.css';
import '../../css/s/ss4fa8bou.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="supgx2bpn"/><path class="ss4fa8bou"/>`,
		"fallback": "energy-icons:pipe-tee-20",
	});
}

export default Component;
