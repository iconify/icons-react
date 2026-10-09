import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xzx5mchnl.css';
import '../../css/w/w2wr_lj5z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xzx5mchnl"/><path class="w2wr_lj5z"/>`,
		"fallback": "energy-icons:saw-48-bold",
	});
}

export default Component;
