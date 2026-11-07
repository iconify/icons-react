import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gpmwkf-7z.css';
import '../../css/f/fl2kpnyol.css';
import '../../css/w/wk6b4ib4t.css';
import '../../css/u/u28u1dcvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gpmwkf-7z"/><path class="fl2kpnyol"/><path class="wk6b4ib4t"/><path class="u28u1dcvs"/>`,
		"fallback": "solar:plate-bold-duotone",
	});
}

export default Component;
