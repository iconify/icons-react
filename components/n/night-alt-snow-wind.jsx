import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzn_di5ne.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzn_di5ne"/>`,
		"fallback": "wi:night-alt-snow-wind",
	});
}

export default Component;
