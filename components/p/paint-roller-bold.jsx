import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwit5_4bm.css';
import '../../css/a/a6molq-5v.css';
import '../../css/z/z75ed3b-u.css';
import '../../css/b/b4tox8bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwit5_4bm"/><path class="a6molq-5v"/><path class="z75ed3b-u"/><path class="b4tox8bhm"/>`,
		"fallback": "solar:paint-roller-bold",
	});
}

export default Component;
