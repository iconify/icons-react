import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csw0kbbpv.css';
import '../../css/w/wf15_9b8y.css';
import '../../css/q/qiau4mbbk.css';

const viewBox = {"width":340,"height":340};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="csw0kbbpv"><path clip-rule="evenodd" class="wf15_9b8y"/><path class="qiau4mbbk"/></g>`,
		"fallback": "thesvg-color:wakatime-dark",
	});
}

export default Component;
