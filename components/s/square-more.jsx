import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjug9ybmp.css';
import '../../css/e/ecuj1-btq.css';
import '../../css/h/hk8vu0bed.css';
import '../../css/u/ur4hs2dgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjug9ybmp"/><circle class="ecuj1-btq"/><circle class="hk8vu0bed"/><circle class="ur4hs2dgi"/>`,
		"fallback": "circum:square-more",
	});
}

export default Component;
