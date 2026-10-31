import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjzqy4bri.css';
import '../../css/s/swsnl4b_n.css';
import '../../css/y/yydc_tcsq.css';
import '../../css/t/tmo38wbpa.css';
import '../../css/e/e38acrb9a.css';
import '../../css/c/cktdxyblz.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjzqy4bri"/><path class="swsnl4b_n"/><path class="yydc_tcsq"/><path class="tmo38wbpa"/><path class="e38acrb9a"/><path class="cktdxyblz"/>`,
		"fallback": "iconito:tuna",
	});
}

export default Component;
