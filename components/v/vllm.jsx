import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb2zfhboo.css';
import '../../css/k/k7g135buj.css';
import '../../css/o/ox2d_gpql.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb2zfhboo"/><path class="k7g135buj"/><path class="ox2d_gpql"/>`,
		"fallback": "selfhst:vllm",
	});
}

export default Component;
