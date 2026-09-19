import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/a3uxz3buo.css';
import '../../css/v/vrylp1bhj.css';
import '../../css/c/cngj3qbjb.css';
import '../../css/m/mpxen5bpg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="a3uxz3buo"/><path class="vrylp1bhj"/><path class="cngj3qbjb"/><path class="mpxen5bpg"/></g>`,
		"fallback": "icon-park:message-success",
	});
}

export default Component;
