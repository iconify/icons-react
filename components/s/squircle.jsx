import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzc_2nz_m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzc_2nz_m"/>`,
		"fallback": "hugeicons:squircle",
	});
}

export default Component;
