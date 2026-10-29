import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_2lkqbxb.css';
import '../../css/w/wij26x4pc.css';
import '../../css/m/m-j57qakv.css';
import '../../css/m/myxxvabeh.css';
import '../../css/c/cbuc0sb9j.css';
import '../../css/x/xzk2wf4zt.css';
import '../../css/h/ho1yev95w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="t_2lkqbxb"><path class="wij26x4pc wm-shadow"/><path class="m-j57qakv"/><path class="myxxvabeh"/><path class="cbuc0sb9j"/><path class="wm-shine xzk2wf4zt"/><path class="ho1yev95w wm-deco"/></g>`,
		"fallback": "withicons-sticker:loader",
	});
}

export default Component;
