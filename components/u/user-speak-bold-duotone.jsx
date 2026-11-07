import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h0ga5b8fm.css';
import '../../css/n/neu-2wb2j.css';
import '../../css/t/twzcbexyu.css';
import '../../css/g/gl4r59b4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h0ga5b8fm"/><path class="neu-2wb2j"/><path class="twzcbexyu"/><path class="gl4r59b4n"/>`,
		"fallback": "solar:user-speak-bold-duotone",
	});
}

export default Component;
