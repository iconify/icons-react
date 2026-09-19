import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td-iq2oif.css';
import '../../css/d/dq3pidbpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td-iq2oif"/><path class="dq3pidbpg"/>`,
		"fallback": "boxicons:washer-filled",
	});
}

export default Component;
