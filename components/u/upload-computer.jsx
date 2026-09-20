import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/vl62orbzq.css';
import '../../css/c/cayg4r70n.css';
import '../../css/h/hlaykcb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="vl62orbzq"/><path class="cayg4r70n"/><path class="hlaykcb8w"/></g>`,
		"fallback": "streamline-sharp-color:upload-computer",
	});
}

export default Component;
