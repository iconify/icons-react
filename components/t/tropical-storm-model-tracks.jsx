import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7ieikbdu.css';
import '../../css/y/ypqutt2oo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7ieikbdu"/><path class="ypqutt2oo"/>`,
		"fallback": "carbon:tropical-storm-model-tracks",
	});
}

export default Component;
