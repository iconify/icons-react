import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/xkao-zbwh.css';
import '../../css/b/b0o8dgb5h.css';
import '../../css/f/fjz3n__hz.css';
import '../../css/q/qg2an0vyr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="xkao-zbwh"/><path class="b0o8dgb5h"/><path class="fjz3n__hz"/><path class="qg2an0vyr"/></g>`,
		"fallback": "streamline-plump-color:intellectual",
	});
}

export default Component;
