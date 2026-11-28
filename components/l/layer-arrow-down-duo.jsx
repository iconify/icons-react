import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/srfvlds5l.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zfzytlb2v.css';
import '../../css/v/vrgoaknvm.css';
import '../../css/s/sa3gq0d8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary srfvlds5l"/><g class="dt0cm9dhy primary"><path class="zfzytlb2v"/><path class="vrgoaknvm"/><path class="sa3gq0d8x"/></g>`,
		"fallback": "iconaut:layer-arrow-down-duo",
	});
}

export default Component;
