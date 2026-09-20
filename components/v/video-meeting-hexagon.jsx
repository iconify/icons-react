import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/i/iwla4bc9p.css';
import '../../css/t/t628li7vo.css';
import '../../css/z/zbj2m4bkn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="iwla4bc9p"/><path class="t628li7vo"/><path class="zbj2m4bkn"/></g>`,
		"fallback": "streamline-cyber-color:video-meeting-hexagon",
	});
}

export default Component;
