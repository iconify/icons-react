import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/pkdyklbrl.css';
import '../../css/z/z4shp3bcf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="pkdyklbrl"/><path class="z4shp3bcf"/></g>`,
		"fallback": "iconoir:music-1",
	});
}

export default Component;
