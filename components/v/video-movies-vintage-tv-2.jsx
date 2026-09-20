import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yavgiittq.css';
import '../../css/q/q639kz3pp.css';
import '../../css/u/usgj2obtm.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yavgiittq"/><path class="q639kz3pp"/><path class="usgj2obtm"/>`,
		"fallback": "streamline-pixel:video-movies-vintage-tv-2",
	});
}

export default Component;
