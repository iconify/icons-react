import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzd4rrbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzd4rrbit"/>`,
		"fallback": "reicon:video-play-filled",
	});
}

export default Component;
