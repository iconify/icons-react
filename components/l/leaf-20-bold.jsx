import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qvpxvsbif.css';
import '../../css/x/xph283bpq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qvpxvsbif"/><path class="xph283bpq"/>`,
		"fallback": "energy-icons:leaf-20-bold",
	});
}

export default Component;
