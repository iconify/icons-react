import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/w/wbtbukbtl.css';
import '../../css/v/v58kzqg6v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="wbtbukbtl"/><circle class="v58kzqg6v"/></g>`,
		"fallback": "icon-park:video-one",
	});
}

export default Component;
