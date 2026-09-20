import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzjpmdbit.css';
import '../../css/h/h0kgu1k_z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzjpmdbit"/><path class="h0kgu1k_z"/>`,
		"fallback": "token:uw3s",
	});
}

export default Component;
