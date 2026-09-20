import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/tca4ntruy.css';
import '../../css/g/g3xza79uf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="tca4ntruy"/><path class="g3xza79uf"/></g>`,
		"fallback": "streamline-ultimate:tags-1",
	});
}

export default Component;
