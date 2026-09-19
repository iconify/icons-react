import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/i/iofxxabca.css';
import '../../css/i/icjlvdb0c.css';
import '../../css/b/b7pyyhb0w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="iofxxabca"/><path class="icjlvdb0c"/><path class="b7pyyhb0w"/></g>`,
		"fallback": "hugeicons:quran-03",
	});
}

export default Component;
