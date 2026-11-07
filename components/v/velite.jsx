import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p8qjfwb5z.css';
import '../../css/m/mjmo6o7rp.css';
import '../../css/t/tctv76bhi.css';
import '../../css/k/ksdryubwm.css';
import '../../css/s/s_dwlvbyp.css';
import '../../css/o/odwcfcbti.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGY1gIvxZa" x2="1" y1="1"><stop offset="0" class="p8qjfwb5z"/><stop offset="1" class="mjmo6o7rp"/></linearGradient><linearGradient id="SVG1EmZ6bfy" x2="1" y1="1"><stop offset="0" class="tctv76bhi"/><stop offset="1" class="ksdryubwm"/></linearGradient></defs><path fill="url(#SVGY1gIvxZa)" class="s_dwlvbyp"/><path fill="url(#SVG1EmZ6bfy)" class="odwcfcbti"/>`,
		"fallback": "devicon:velite",
	});
}

export default Component;
