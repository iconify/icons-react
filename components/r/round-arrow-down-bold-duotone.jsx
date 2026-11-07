import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpv5vhdla.css';
import '../../css/t/tpf4ahbit.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpv5vhdla"/><path class="tpf4ahbit"/>`,
		"fallback": "solar:round-arrow-down-bold-duotone",
	});
}

export default Component;
