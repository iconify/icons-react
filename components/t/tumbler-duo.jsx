import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n96lj7bkw.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/aink3vbmj.css';
import '../../css/o/osn-tobkz.css';
import '../../css/f/fsmuwe8bo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n96lj7bkw secondary"/><g class="dt0cm9dhy primary"><path class="aink3vbmj"/><path class="osn-tobkz"/><path class="fsmuwe8bo"/></g>`,
		"fallback": "iconaut:tumbler-duo",
	});
}

export default Component;
