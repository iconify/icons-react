import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/z/zu4_6r0wo.css';
import '../../css/v/vh366uf2d.css';
import '../../css/t/tt_dehbtw.css';
import '../../css/t/tejeg95en.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="zu4_6r0wo"/><path class="vh366uf2d"/><path class="tt_dehbtw"/><path class="tejeg95en"/></g>`,
		"fallback": "icon-park:journey",
	});
}

export default Component;
