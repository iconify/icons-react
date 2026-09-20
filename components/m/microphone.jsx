import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t3hohrr9d.css';
import '../../css/t/tfhac2bib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><rect class="t3hohrr9d"/><path class="tfhac2bib"/></g>`,
		"fallback": "reicon:microphone",
	});
}

export default Component;
