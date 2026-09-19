import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xtuj9jdkl.css';
import '../../css/f/fp1o2osmk.css';
import '../../css/u/udwfq_8gg.css';
import '../../css/t/tvxm_574j.css';
import '../../css/z/zd50g7btg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xtuj9jdkl"/><path class="fp1o2osmk"/><path class="udwfq_8gg"/><path class="tvxm_574j"/><path class="zd50g7btg"/></g>`,
		"fallback": "fluent-emoji-flat:satellite",
	});
}

export default Component;
