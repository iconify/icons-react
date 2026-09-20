import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qloeeh4pd.css';
import '../../css/u/uffa5mm_q.css';
import '../../css/g/gxi7eo-2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="qloeeh4pd"><path class="uffa5mm_q"/><path class="gxi7eo-2j"/></g>`,
		"fallback": "streamline-sharp:sound-recognition-search",
	});
}

export default Component;
