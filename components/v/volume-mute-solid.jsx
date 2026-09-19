import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l9478gbop.css';
import '../../css/f/fbrd_ac7r.css';
import '../../css/s/s7ry8jaqi.css';
import '../../css/y/ymrailbmx.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-solid clr-i-solid-path-1 l9478gbop"/><path class="clr-i-solid clr-i-solid-path-2 fbrd_ac7r"/><path class="clr-i-solid clr-i-solid-path-3 s7ry8jaqi"/><path class="clr-i-solid clr-i-solid-path-4 ymrailbmx"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:volume-mute-solid",
	});
}

export default Component;
