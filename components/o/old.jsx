import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/igo4fcchz.css';
import '../../css/g/g57rsqbem.css';
import '../../css/y/yuu8qw-ll.css';
import '../../css/z/zo94kpjoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="igo4fcchz"/><circle class="g57rsqbem"/><path class="yuu8qw-ll"/><path class="zo94kpjoo"/></g>`,
		"fallback": "andrsrxn:old",
	});
}

export default Component;
