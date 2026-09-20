import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/l/lkvah6bqa.css';
import '../../css/m/m-40v_byi.css';
import '../../css/b/bo7uaimwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="lkvah6bqa"/><path class="m-40v_byi"/><path class="bo7uaimwn"/></g>`,
		"fallback": "streamline-cyber:signal-2",
	});
}

export default Component;
