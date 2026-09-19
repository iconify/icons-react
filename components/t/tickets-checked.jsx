import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/v/vzp6aob_f.css';
import '../../css/n/ni0hk-bja.css';
import '../../css/l/lrryd7lgt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="vzp6aob_f"/><path class="ni0hk-bja"/><path class="lrryd7lgt"/></g>`,
		"fallback": "icon-park:tickets-checked",
	});
}

export default Component;
