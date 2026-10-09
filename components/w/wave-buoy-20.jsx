import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eji1th4ou.css';
import '../../css/w/wugtu-b6f.css';
import '../../css/t/td-qy1bhw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eji1th4ou"/><path class="wugtu-b6f"/><path class="td-qy1bhw"/>`,
		"fallback": "energy-icons:wave-buoy-20",
	});
}

export default Component;
