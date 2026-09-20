import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhq7le4od.css';
import '../../css/h/ht24iib2t.css';
import '../../css/i/ir1p6zwoe.css';
import '../../css/o/od8p-_f_j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhq7le4od"/><path class="ht24iib2t"/><path class="ir1p6zwoe"/><path class="od8p-_f_j"/>`,
		"fallback": "streamline-pixel:user-single-aim",
	});
}

export default Component;
