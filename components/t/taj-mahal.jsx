import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/xr_v0bl0a.css';
import '../../css/t/tm68yffwl.css';
import '../../css/i/in5lanbvd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="xr_v0bl0a"/><path class="tm68yffwl"/><path class="in5lanbvd"/></g>`,
		"fallback": "icon-park-outline:taj-mahal",
	});
}

export default Component;
