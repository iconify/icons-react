import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bgk_arrkt.css';
import '../../css/f/fdtkzu5vr.css';
import '../../css/c/cf56gjb1f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bgk_arrkt"/><path class="fdtkzu5vr"/><path class="cf56gjb1f"/></g>`,
		"fallback": "hugeicons:upload-03",
	});
}

export default Component;
