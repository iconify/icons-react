import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/azr9tnz5l.css';
import '../../css/w/wkywe6bfy.css';
import '../../css/b/bj-h8wx_p.css';
import '../../css/v/v0211bszy.css';
import '../../css/t/tdke8cbot.css';
import '../../css/i/i5aur64oq.css';
import '../../css/u/uwl-_tbeb.css';
import '../../css/z/zjq5nfybb.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="azr9tnz5l"/><path class="wkywe6bfy"/><path class="bj-h8wx_p"/><path class="v0211bszy"/><path class="tdke8cbot"/><path class="i5aur64oq"/><path class="uwl-_tbeb"/><path class="zjq5nfybb"/>`,
		"fallback": "openmoji:old-man-medium-dark-skin-tone",
	});
}

export default Component;
