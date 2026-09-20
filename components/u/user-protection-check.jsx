import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/o/off80rbwk.css';
import '../../css/w/wcsosyb7y.css';
import '../../css/h/hsh97fb4a.css';
import '../../css/g/g785wwvao.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="off80rbwk"/><path class="wcsosyb7y"/><path class="hsh97fb4a"/><path class="g785wwvao"/></g>`,
		"fallback": "streamline-plump-color:user-protection-check",
	});
}

export default Component;
