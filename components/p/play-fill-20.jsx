import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbr-zzb1p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbr-zzb1p"/>`,
		"fallback": "garden:play-fill-20",
	});
}

export default Component;
