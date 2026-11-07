import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ei9m3wbhq.css';
import '../../css/w/wx7l37buh.css';
import '../../css/k/k2xvqibpd.css';
import '../../css/v/v7ta-d0-v.css';
import '../../css/a/a8ksc9wlh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ei9m3wbhq"/><path clip-rule="evenodd" class="wx7l37buh"/><path clip-rule="evenodd" class="k2xvqibpd"/><path clip-rule="evenodd" class="v7ta-d0-v"/><path class="a8ksc9wlh"/>`,
		"fallback": "solar:playlist-minimalistic-2-bold",
	});
}

export default Component;
