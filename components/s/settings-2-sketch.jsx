import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g-xwnsrlt.css';
import '../../css/r/rqx6b27ni.css';
import '../../css/m/msccn7b6y.css';
import '../../css/k/kswlmacai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g-xwnsrlt wm-a"/><path class="rqx6b27ni wm-k"/><path class="msccn7b6y wm-a"/><path class="kswlmacai wm-a"/></g>`,
		"fallback": "withicons:settings-2-sketch",
	});
}

export default Component;
