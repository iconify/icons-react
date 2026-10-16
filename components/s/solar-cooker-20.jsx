import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z22c6ybkz.css';
import '../../css/x/xmr7_lblt.css';
import '../../css/m/mi661mi7p.css';
import '../../css/m/mk7wn8hfw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z22c6ybkz"/><path class="xmr7_lblt"/><path class="mi661mi7p"/><path class="mk7wn8hfw"/>`,
		"fallback": "energy-icons:solar-cooker-20",
	});
}

export default Component;
