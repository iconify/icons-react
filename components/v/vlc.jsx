import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i186x-vtx.css';
import '../../css/i/ivau6ccrv.css';
import '../../css/v/vjtndybvi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i186x-vtx"/><path class="ivau6ccrv"/><path class="vjtndybvi"/>`,
		"fallback": "flat-color-icons:vlc",
	});
}

export default Component;
