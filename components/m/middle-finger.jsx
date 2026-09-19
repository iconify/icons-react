import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/n/nyv9n775i.css';
import '../../css/r/rvrrow_wg.css';
import '../../css/k/kd4brcc1s.css';
import '../../css/o/o6-y1ybfd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="nyv9n775i"/><path class="rvrrow_wg"/><path class="kd4brcc1s"/><path class="o6-y1ybfd"/></g>`,
		"fallback": "icon-park:middle-finger",
	});
}

export default Component;
