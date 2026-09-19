import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xudfhv36p.css';
import '../../css/h/hva77nwmz.css';
import '../../css/r/r1yi-q_sl.css';
import '../../css/m/md3uskbdd.css';
import '../../css/w/whacl9boi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xudfhv36p"/><path class="hva77nwmz"/><path class="r1yi-q_sl"/><path class="md3uskbdd"/><path class="whacl9boi"/></g>`,
		"fallback": "fluent-emoji-flat:saxophone",
	});
}

export default Component;
