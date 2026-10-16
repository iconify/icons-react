import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xbnqjxbpf.css';
import '../../css/r/rv6abjb-x.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xbnqjxbpf"/><path class="rv6abjb-x"/>`,
		"fallback": "energy-icons:smart-speaker-20",
	});
}

export default Component;
