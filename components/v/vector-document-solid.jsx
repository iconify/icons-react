import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6pws_bay.css';
import '../../css/x/xj2ftdbyd.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6pws_bay"/><path clip-rule="evenodd" class="xj2ftdbyd"/>`,
		"fallback": "teenyicons:vector-document-solid",
	});
}

export default Component;
