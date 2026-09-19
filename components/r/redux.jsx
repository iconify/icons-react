import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t99j2sggn.css';
import '../../css/r/rswgeacvu.css';
import '../../css/z/zidxczbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t99j2sggn"/><path class="rswgeacvu"/><path class="zidxczbyk"/>`,
		"fallback": "bxl:redux",
	});
}

export default Component;
