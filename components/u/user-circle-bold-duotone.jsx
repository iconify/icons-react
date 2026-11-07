import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpv5vhdla.css';
import '../../css/v/vlgypgk6o.css';
import '../../css/x/xs5tnub4w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpv5vhdla"/><path class="vlgypgk6o"/><path class="xs5tnub4w"/>`,
		"fallback": "solar:user-circle-bold-duotone",
	});
}

export default Component;
