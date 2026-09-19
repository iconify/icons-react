import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/b/br49-hbxp.css';
import '../../css/u/uqdaww-sc.css';
import '../../css/m/mhzxvabbn.css';
import '../../css/j/j5mlmbc2l.css';
import '../../css/e/eg-j6ebkn.css';
import '../../css/a/a0wlhmbiy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="br49-hbxp"/><path class="uqdaww-sc"/><path class="mhzxvabbn"/><path class="j5mlmbc2l"/><rect class="eg-j6ebkn"/><path class="a0wlhmbiy"/></g>`,
		"fallback": "icon-park:invert-camera",
	});
}

export default Component;
