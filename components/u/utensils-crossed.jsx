import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/e/exmqpbbns.css';
import '../../css/b/b5jgdnp5j.css';
import '../../css/s/squ5f254c.css';
import '../../css/c/czn2-cbwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="exmqpbbns"/><path class="b5jgdnp5j wm-k"/><path class="squ5f254c wm-a"/><path class="czn2-cbwf wm-deco"/></g>`,
		"fallback": "withicons-kawaii:utensils-crossed",
	});
}

export default Component;
