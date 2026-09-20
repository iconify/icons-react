import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bsh15bben.css';
import '../../css/y/y8n4yt1ck.css';
import '../../css/y/yjsjycc6p.css';
import '../../css/b/bdrkfzx2p.css';
import '../../css/a/a76rq6xbp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="bsh15bben"/><path class="y8n4yt1ck"/><path class="yjsjycc6p"/><path class="bdrkfzx2p"/><path class="a76rq6xbp"/></g>`,
		"fallback": "streamline-plump-color:smiley-drool",
	});
}

export default Component;
