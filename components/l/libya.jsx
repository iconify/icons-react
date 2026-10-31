import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz_4v-slc.css';
import '../../css/t/tebjm8_ui.css';
import '../../css/i/i4kmshdkq.css';
import '../../css/p/pxs_36bfv.css';
import '../../css/y/yg1ho1_sl.css';

const viewBox = {"width":30,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vz_4v-slc"/><path class="tebjm8_ui"/><path class="i4kmshdkq"/><path class="pxs_36bfv"/><path class="yg1ho1_sl"/>`,
		"fallback": "tabler-flags:libya",
	});
}

export default Component;
