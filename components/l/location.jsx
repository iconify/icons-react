import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkbfyf_pr.css';
import '../../css/m/md69zlb2k.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkbfyf_pr"/><path class="md69zlb2k"/>`,
		"fallback": "nimbus:location",
	});
}

export default Component;
