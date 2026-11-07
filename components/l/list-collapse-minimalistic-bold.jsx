import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_kzq_bzg.css';
import '../../css/x/xgkgwx6vp.css';
import '../../css/a/ax17gbbek.css';
import '../../css/t/t5ovb-bau.css';
import '../../css/j/jctsgpbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h_kzq_bzg"/><path class="xgkgwx6vp"/><path class="ax17gbbek"/><path class="t5ovb-bau"/><path class="jctsgpbwy"/>`,
		"fallback": "solar:list-collapse-minimalistic-bold",
	});
}

export default Component;
