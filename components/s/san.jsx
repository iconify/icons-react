import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrnllbmrd.css';
import '../../css/n/ncz4lgb6v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrnllbmrd"/><path class="ncz4lgb6v"/>`,
		"fallback": "material-icon-theme:san",
	});
}

export default Component;
