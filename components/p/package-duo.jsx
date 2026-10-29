import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vncwlbbyf.css';
import '../../css/s/sqx3j0bau.css';
import '../../css/r/rojp4pxea.css';
import '../../css/a/a91ndtnyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vncwlbbyf"/><path class="sqx3j0bau wm-a"/><path class="rojp4pxea"/><path class="a91ndtnyb"/></g>`,
		"fallback": "withicons:package-duo",
	});
}

export default Component;
