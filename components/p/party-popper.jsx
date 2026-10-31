import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/i/i_o4yod3l.css';
import '../../css/b/b8m0wwcra.css';
import '../../css/k/kphprdbgh.css';
import '../../css/w/wdl_f_dsf.css';
import '../../css/p/p67oyfrds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="i_o4yod3l wm-shadow"/><path class="b8m0wwcra wm-shadow"/><path class="kphprdbgh"/><path class="wdl_f_dsf"/><path class="p67oyfrds wm-s"/></g>`,
		"fallback": "withicons-brutal:party-popper",
	});
}

export default Component;
