import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ghqal2bgo.css';
import '../../css/z/z_jfg6_tf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ghqal2bgo"/><path class="z_jfg6_tf"/>`,
		"fallback": "streamline-pixel:interface-essential-loading-100-percent-1",
	});
}

export default Component;
