import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izs_rbb_s.css';
import '../../css/p/pt6hrq4xl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izs_rbb_s"/><path class="pt6hrq4xl"/>`,
		"fallback": "streamline-plump:sail-ship-solid",
	});
}

export default Component;
