import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zhqbjdb0a.css';
import '../../css/s/so-kyjbpx.css';
import '../../css/f/fq2vfgfhg.css';
import '../../css/m/m-0j5bclz.css';
import '../../css/g/gzr_n4aup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zhqbjdb0a"/><path class="so-kyjbpx"/><path class="fq2vfgfhg"/><path class="m-0j5bclz"/><path class="gzr_n4aup"/></g>`,
		"fallback": "solar:paw-broken",
	});
}

export default Component;
