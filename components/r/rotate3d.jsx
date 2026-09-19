import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/f/fvde7hs4v.css';
import '../../css/s/secn_kzqm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="fvde7hs4v"/><path class="secn_kzqm"/></g>`,
		"fallback": "hugeicons:rotate3d",
	});
}

export default Component;
