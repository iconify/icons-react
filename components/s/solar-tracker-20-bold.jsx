import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/al_ly38km.css';
import '../../css/u/uav-pacbt.css';
import '../../css/a/ag99qbbai.css';
import '../../css/l/l7namiv5j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="al_ly38km"/><path class="uav-pacbt"/><path class="ag99qbbai"/><path class="l7namiv5j"/>`,
		"fallback": "energy-icons:solar-tracker-20-bold",
	});
}

export default Component;
