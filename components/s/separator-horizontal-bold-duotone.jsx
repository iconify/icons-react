import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtpeb-edw.css';
import '../../css/z/z-fwhccia.css';
import '../../css/k/kwhpv5b4r.css';
import '../../css/w/wj-op7bjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xtpeb-edw"><path class="z-fwhccia"/><path class="kwhpv5b4r"/></g><path class="wj-op7bjd"/>`,
		"fallback": "solar:separator-horizontal-bold-duotone",
	});
}

export default Component;
