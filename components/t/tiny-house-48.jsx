import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gap9t0gmp.css';
import '../../css/t/tyua78b5m.css';
import '../../css/d/dvftmgbhg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gap9t0gmp"/><path class="tyua78b5m"/><path class="dvftmgbhg"/>`,
		"fallback": "energy-icons:tiny-house-48",
	});
}

export default Component;
