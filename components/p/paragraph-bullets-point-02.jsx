import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oe7vz9bcj.css';
import '../../css/t/t-7lz5bmz.css';
import '../../css/y/yphewc7qd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oe7vz9bcj"/><circle class="t-7lz5bmz"/><circle class="yphewc7qd"/></g>`,
		"fallback": "hugeicons:paragraph-bullets-point-02",
	});
}

export default Component;
