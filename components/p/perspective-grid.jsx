import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/h/hmle4qehd.css';
import '../../css/s/sdqlbxbcw.css';
import '../../css/z/zfhw3cbas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="hmle4qehd"/><path class="sdqlbxbcw"/><path class="zfhw3cbas"/></g>`,
		"fallback": "streamline-ultimate:perspective-grid",
	});
}

export default Component;
