import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp0mn-ncp.css';
import '../../css/g/gxglj2bzq.css';
import '../../css/d/dq8fo2c6v.css';
import '../../css/e/ey9tmrrek.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp0mn-ncp"/><path class="gxglj2bzq"/><path class="dq8fo2c6v"/><path class="ey9tmrrek"/>`,
		"fallback": "energy-icons:satellite-20-bold",
	});
}

export default Component;
