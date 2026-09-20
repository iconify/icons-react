import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/r/rwhacnnbk.css';
import '../../css/g/geda3qblp.css';
import '../../css/f/fumudnnfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="rwhacnnbk"/><path class="geda3qblp"/><path class="fumudnnfx"/></g>`,
		"fallback": "tabler:map-pin-search",
	});
}

export default Component;
