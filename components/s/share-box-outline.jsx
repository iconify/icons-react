import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkmq48bsn.css';
import '../../css/q/qd1ggccdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mkmq48bsn"/><path class="qd1ggccdo"/>`,
		"fallback": "basil:share-box-outline",
	});
}

export default Component;
