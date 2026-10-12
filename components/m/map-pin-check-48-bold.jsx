import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijtm4crnn.css';
import '../../css/a/afxexlctq.css';
import '../../css/y/y9mg2tbzu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijtm4crnn"/><path class="afxexlctq"/><path class="y9mg2tbzu"/>`,
		"fallback": "energy-icons:map-pin-check-48-bold",
	});
}

export default Component;
