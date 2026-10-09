import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzpjlsbtf.css';
import '../../css/s/siuoblqsn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzpjlsbtf"/><path class="siuoblqsn"/>`,
		"fallback": "energy-icons:solar-inverter-20-bold",
	});
}

export default Component;
