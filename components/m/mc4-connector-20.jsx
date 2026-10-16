import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el1gyzb_x.css';
import '../../css/g/gbea4f04d.css';
import '../../css/z/zeu5ekosw.css';
import '../../css/i/ix55rn85a.css';
import '../../css/b/bmn4lj2dh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el1gyzb_x"/><path class="gbea4f04d"/><path class="zeu5ekosw"/><path class="ix55rn85a"/><path class="bmn4lj2dh"/>`,
		"fallback": "energy-icons:mc4-connector-20",
	});
}

export default Component;
