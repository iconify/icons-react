import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kdt7z-kws.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kdt7z-kws"/>`,
		"fallback": "streamline-plump:receipt-cross-remix",
	});
}

export default Component;
