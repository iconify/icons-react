import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/k/kzzr43bgj.css';
import '../../css/a/axhf0btpf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="kzzr43bgj"/><path class="axhf0btpf"/></g>`,
		"fallback": "hugeicons:location-remove-02",
	});
}

export default Component;
