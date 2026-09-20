import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vyekjzxcc.css';
import '../../css/t/tmpm_6byj.css';
import '../../css/r/r8-cjywgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="vyekjzxcc"/><circle class="tmpm_6byj"/><rect class="r8-cjywgb"/></g>`,
		"fallback": "lucide:wallpaper",
	});
}

export default Component;
