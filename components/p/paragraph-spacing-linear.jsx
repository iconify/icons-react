import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/p/poyc1firz.css';
import '../../css/b/bq0ypf47a.css';
import '../../css/i/iim04tfhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="poyc1firz"/><path class="bq0ypf47a"/><path class="iim04tfhn"/></g>`,
		"fallback": "solar:paragraph-spacing-linear",
	});
}

export default Component;
