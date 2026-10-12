import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e78tbzb1q.css';
import '../../css/v/v5kipyuxv.css';
import '../../css/d/dw5ylqojm.css';
import '../../css/x/x6hzufb5p.css';
import '../../css/t/to-zwy-np.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e78tbzb1q"/><path class="v5kipyuxv"/><path class="dw5ylqojm"/><path class="x6hzufb5p"/><path class="to-zwy-np"/>`,
		"fallback": "energy-icons:snail-20",
	});
}

export default Component;
