import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/m/mjczpwbmh.css';
import '../../css/g/gr4xe8b9e.css';
import '../../css/h/h79q5vbot.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="mjczpwbmh"/><circle class="gr4xe8b9e"/><path class="h79q5vbot"/></g>`,
		"fallback": "icon-park-outline:outbound",
	});
}

export default Component;
