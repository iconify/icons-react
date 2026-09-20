import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp59veb0x.css';
import '../../css/x/xe5lf2fsz.css';
import '../../css/o/ozwjasbqk.css';
import '../../css/x/xsydh-bnl.css';
import '../../css/x/x2dxuebvc.css';
import '../../css/i/i1mh7wbnh.css';
import '../../css/t/tw5plsbcy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp59veb0x"/><path class="xe5lf2fsz"/><path class="ozwjasbqk"/><path class="xsydh-bnl"/><path class="x2dxuebvc"/><path class="i1mh7wbnh"/><path class="tw5plsbcy"/>`,
		"fallback": "nonicons:kubernetes-16",
	});
}

export default Component;
