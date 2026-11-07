import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r58n2hbum.css';
import '../../css/d/d6-v1qbmc.css';
import '../../css/s/s4h6spb2l.css';
import '../../css/b/bxbo83kzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r58n2hbum"/><path class="d6-v1qbmc"/><path class="s4h6spb2l"/><path class="bxbo83kzc"/>`,
		"fallback": "solar:watch-round-bold-duotone",
	});
}

export default Component;
