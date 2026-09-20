import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_zzjfbhv.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_zzjfbhv"/>`,
		"fallback": "map:painter",
	});
}

export default Component;
