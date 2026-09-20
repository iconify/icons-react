import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wetsv3agd.css';
import '../../css/q/quihcfbar.css';
import '../../css/k/k8agsabod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wetsv3agd"/><path clip-rule="evenodd" class="quihcfbar"/><path class="k8agsabod"/>`,
		"fallback": "token:renbtc",
	});
}

export default Component;
