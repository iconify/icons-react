import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whvhgnftn.css';
import '../../css/n/nr45wil8i.css';
import '../../css/x/xi8s70b8m.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whvhgnftn"/><path class="nr45wil8i"/><path class="xi8s70b8m"/>`,
		"fallback": "ep:memo",
	});
}

export default Component;
