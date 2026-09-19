import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/h/hq5j0kbho.css';
import '../../css/a/ah51uhl8u.css';
import '../../css/i/iug4c3bzv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="hq5j0kbho"/><circle class="ah51uhl8u"/><path class="iug4c3bzv"/></g>`,
		"fallback": "icon-park-outline:setting-computer",
	});
}

export default Component;
