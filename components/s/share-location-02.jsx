import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sqi5mdecy.css';
import '../../css/g/gg9oyuvyf.css';
import '../../css/g/gx3tdtbwk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sqi5mdecy"/><path class="gg9oyuvyf"/><path class="gx3tdtbwk"/></g>`,
		"fallback": "hugeicons:share-location-02",
	});
}

export default Component;
