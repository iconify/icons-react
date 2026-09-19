import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mst3afbdz.css';
import '../../css/w/wa7hudb5j.css';
import '../../css/g/gl_1tcc4d.css';
import '../../css/o/oe1zm1b9v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mst3afbdz"/><path class="wa7hudb5j"/><path class="gl_1tcc4d"/><path class="oe1zm1b9v"/>`,
		"fallback": "flag:sy-1x1",
	});
}

export default Component;
