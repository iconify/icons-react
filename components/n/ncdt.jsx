import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvq8f1wlj.css';
import '../../css/j/jxmx0qioi.css';
import '../../css/h/h3xl-d1kj.css';
import '../../css/n/nghmr-zxx.css';
import '../../css/s/spr6fg90x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvq8f1wlj"/><path clip-rule="evenodd" class="jxmx0qioi"/><path class="h3xl-d1kj"/><path clip-rule="evenodd" class="nghmr-zxx"/><path class="spr6fg90x"/>`,
		"fallback": "token:ncdt",
	});
}

export default Component;
