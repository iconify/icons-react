import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/msi73-bbv.css';
import '../../css/h/h7qzhgb-s.css';
import '../../css/q/q483q5b_a.css';
import '../../css/v/vabl43e7u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="msi73-bbv"/><path class="h7qzhgb-s"/><path class="q483q5b_a"/><path class="vabl43e7u"/></g>`,
		"fallback": "icon-park:new-dianziqian",
	});
}

export default Component;
