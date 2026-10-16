import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dssydwbjm.css';
import '../../css/u/uzp27665y.css';
import '../../css/z/zp5y05ahx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dssydwbjm"/><path class="uzp27665y"/><path class="zp5y05ahx"/>`,
		"fallback": "energy-icons:oil-tanker-48",
	});
}

export default Component;
