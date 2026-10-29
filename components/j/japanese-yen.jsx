import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oru91es3j.css';
import '../../css/f/fmvts2lan.css';
import '../../css/m/me1e4q2ye.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="oru91es3j"/><path class="fmvts2lan"/><path class="me1e4q2ye"/></g>`,
		"fallback": "withicons-bauhaus:japanese-yen",
	});
}

export default Component;
