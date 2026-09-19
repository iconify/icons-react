import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oc_jqu9oc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oc_jqu9oc"/>`,
		"fallback": "f7:metronome",
	});
}

export default Component;
