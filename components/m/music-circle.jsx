import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t9rbyychv.css';
import '../../css/e/eo22vc03g.css';
import '../../css/g/gz6xmvf9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t9rbyychv"/><path class="eo22vc03g"/><path class="gz6xmvf9a"/></g>`,
		"fallback": "reicon:music-circle",
	});
}

export default Component;
