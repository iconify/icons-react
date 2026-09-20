import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yl7hxid5w.css';
import '../../css/r/rs4bqbchn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yl7hxid5w"/><path class="rs4bqbchn"/>`,
		"fallback": "token:urus",
	});
}

export default Component;
