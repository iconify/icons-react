import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/t/tpe2g3bph.css';
import '../../css/o/ok7d4xmgm.css';
import '../../css/f/f-ggwcm5f.css';
import '../../css/y/ye513-row.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="tpe2g3bph"/><rect class="ok7d4xmgm"/><path class="f-ggwcm5f"/><path class="ye513-row"/></g>`,
		"fallback": "icon-park:newlybuild",
	});
}

export default Component;
