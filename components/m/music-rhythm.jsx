import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zxvol2n9z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zxvol2n9z"/>`,
		"fallback": "icon-park-outline:music-rhythm",
	});
}

export default Component;
