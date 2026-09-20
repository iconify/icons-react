import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak0bvlpdn.css';
import '../../css/k/k8lgery7w.css';
import '../../css/z/zixffebzr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak0bvlpdn"/><path class="k8lgery7w"/><path class="zixffebzr"/>`,
		"fallback": "selfhst:synology",
	});
}

export default Component;
