import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jnzo3sbiw.css';
import '../../css/z/zfws45ina.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jnzo3sbiw"/><circle class="zfws45ina"/>`,
		"fallback": "ion:location-outline",
	});
}

export default Component;
