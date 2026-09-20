import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nkl81gx0s.css';
import '../../css/z/zhbt1i4-l.css';
import '../../css/l/l_2f5tbmq.css';
import '../../css/k/k6z303xxq.css';
import '../../css/c/c5f1r473i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="nkl81gx0s"/><path class="zhbt1i4-l"/><path class="l_2f5tbmq"/><path class="k6z303xxq"/><path class="c5f1r473i"/>`,
		"fallback": "selfhst:kapowarr",
	});
}

export default Component;
