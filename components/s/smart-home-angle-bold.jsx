import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi373glwj.css';
import '../../css/u/u68wxibuh.css';
import '../../css/z/z64d1ab0c.css';
import '../../css/r/rl82fg4sr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi373glwj"/><path class="u68wxibuh"/><path class="z64d1ab0c"/><path class="rl82fg4sr"/>`,
		"fallback": "solar:smart-home-angle-bold",
	});
}

export default Component;
