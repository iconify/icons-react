import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/behyiq7it.css';
import '../../css/u/u0qvpwb3u.css';
import '../../css/r/r1kzqabmm.css';
import '../../css/f/foybkjl5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="behyiq7it"/><path class="u0qvpwb3u"/><path class="r1kzqabmm"/><path class="foybkjl5s"/>`,
		"fallback": "token:nht",
	});
}

export default Component;
