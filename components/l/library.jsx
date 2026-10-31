import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/z/zy-b_bcqi.css';
import '../../css/v/vnrjbobxg.css';
import '../../css/i/i4zp26qil.css';
import '../../css/d/db_dzachk.css';
import '../../css/o/ob1ynnb3a.css';
import '../../css/l/l9m6x-bua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow zy-b_bcqi"/><path class="vnrjbobxg wm-shadow"/><path class="i4zp26qil"/><path class="db_dzachk"/><path class="ob1ynnb3a"/><path class="l9m6x-bua"/></g>`,
		"fallback": "withicons-brutal:library",
	});
}

export default Component;
