import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emor5sbck.css';
import '../../css/e/eai8xpb2c.css';
import '../../css/q/qdn8ggbmn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="emor5sbck"/><path class="eai8xpb2c"/><path class="qdn8ggbmn"/>`,
		"fallback": "carbon:intrusion-prevention",
	});
}

export default Component;
