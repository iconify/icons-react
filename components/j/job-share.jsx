import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tfx6v7b3f.css';
import '../../css/l/lgi2c2bem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tfx6v7b3f"/><path class="lgi2c2bem"/></g>`,
		"fallback": "hugeicons:job-share",
	});
}

export default Component;
