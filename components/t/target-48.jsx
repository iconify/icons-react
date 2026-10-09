import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/i/i2a3t5bgb.css';
import '../../css/i/i5i-ymejz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="i2a3t5bgb"/><path class="i5i-ymejz"/>`,
		"fallback": "energy-icons:target-48",
	});
}

export default Component;
