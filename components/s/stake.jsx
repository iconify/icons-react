import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/z/zhttyfb2r.css';
import '../../css/k/knj4-mogf.css';
import '../../css/s/sr63jg56n.css';
import '../../css/w/wspp2xsca.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="zhttyfb2r"/><path class="knj4-mogf"/><path class="sr63jg56n"/><path class="wspp2xsca"/></g>`,
		"fallback": "hugeicons:stake",
	});
}

export default Component;
