import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/k/kd2_hibxd.css';
import '../../css/z/zzqn8_sjh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="kd2_hibxd"/><path class="zzqn8_sjh"/></g>`,
		"fallback": "icon-park-outline:ticket-one",
	});
}

export default Component;
