import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/ocvp3rbsz.css';
import '../../css/v/v9qza_bvi.css';
import '../../css/t/tjm-hnbnu.css';
import '../../css/w/wr4ayvbvd.css';
import '../../css/v/vm197u1vh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ocvp3rbsz"/><path class="v9qza_bvi"/><path class="tjm-hnbnu"/><path class="wr4ayvbvd"/><path class="vm197u1vh"/></g>`,
		"fallback": "streamline-plump-color:mail-search",
	});
}

export default Component;
