import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loa53obtg.css';
import '../../css/k/kxhuiabhg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loa53obtg"/><path class="kxhuiabhg"/>`,
		"fallback": "uim:redo",
	});
}

export default Component;
