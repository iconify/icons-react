import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw6ev6gmc.css';
import '../../css/l/lu898h7ty.css';
import '../../css/e/efzc83vbq.css';
import '../../css/y/ymagfk4yy.css';
import '../../css/y/yifgigbze.css';
import '../../css/p/po4btac9r.css';
import '../../css/f/fszxkcbzr.css';
import '../../css/w/wpmt3rbgn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw6ev6gmc"/><path clip-rule="evenodd" class="lu898h7ty"/><path clip-rule="evenodd" class="efzc83vbq"/><path class="ymagfk4yy"/><path class="yifgigbze"/><path class="po4btac9r"/><path class="fszxkcbzr"/><path class="wpmt3rbgn"/>`,
		"fallback": "thesvg-color:vertexai-google",
	});
}

export default Component;
