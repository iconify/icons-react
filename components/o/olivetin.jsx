import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jd66k8gvw.css';
import '../../css/g/gicdm3bbo.css';
import '../../css/d/dlmbedbiz.css';
import '../../css/t/t8ab0ebix.css';
import '../../css/k/kmmw1jwbq.css';
import '../../css/w/wmkw7db5n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jd66k8gvw"/><path class="gicdm3bbo"/><path class="dlmbedbiz"/><path class="t8ab0ebix"/><ellipse class="kmmw1jwbq"/><path class="wmkw7db5n"/>`,
		"fallback": "selfhst:olivetin",
	});
}

export default Component;
