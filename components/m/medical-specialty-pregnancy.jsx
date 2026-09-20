import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/squhjpcha.css';
import '../../css/p/pqeyd7b6q.css';
import '../../css/x/xgnz_b60g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="squhjpcha"/><path class="pqeyd7b6q"/><path class="xgnz_b60g"/></g>`,
		"fallback": "streamline-ultimate:medical-specialty-pregnancy",
	});
}

export default Component;
