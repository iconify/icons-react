import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/hb8yq8exw.css';
import '../../css/v/vwbxesc0s.css';
import '../../css/i/idbljabdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="hb8yq8exw"/><path class="vwbxesc0s"/><path class="idbljabdw"/></g>`,
		"fallback": "streamline-sharp-color:recycle-bin-2",
	});
}

export default Component;
