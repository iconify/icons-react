import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/o06f1cchn.css';
import '../../css/r/rgu_e105c.css';
import '../../css/e/ejlqzccxq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="o06f1cchn"/><path class="rgu_e105c"/><path class="ejlqzccxq"/></g>`,
		"fallback": "streamline-ultimate:style-three-pin-baseball",
	});
}

export default Component;
