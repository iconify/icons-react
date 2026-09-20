import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/l/lk0esnb3a.css';
import '../../css/k/kshc3bn2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="lk0esnb3a"/><path class="kshc3bn2v"/></g>`,
		"fallback": "reicon:video-add",
	});
}

export default Component;
