import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fjbue95vu.css';
import '../../css/z/zpecffw0q.css';
import '../../css/w/w8qc-tbhs.css';
import '../../css/s/si0qb1owb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fjbue95vu"/><path class="zpecffw0q"/><path class="w8qc-tbhs"/><path class="si0qb1owb"/>`,
		"fallback": "token:push",
	});
}

export default Component;
