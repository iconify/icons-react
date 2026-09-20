import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/a/ah5r38ypk.css';
import '../../css/i/ihzhbpbft.css';
import '../../css/e/emw08xbaa.css';
import '../../css/d/do86j2wah.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="ah5r38ypk"/><path class="ihzhbpbft"/><path class="emw08xbaa"/><path class="do86j2wah"/></g>`,
		"fallback": "streamline-plump-color:password-lock",
	});
}

export default Component;
