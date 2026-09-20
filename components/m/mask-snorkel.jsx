import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v8f071i3i.css';
import '../../css/u/uox72r80z.css';
import '../../css/z/zrdedp6af.css';
import '../../css/x/x9csug_0s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v8f071i3i"/><path class="uox72r80z"/><circle class="zrdedp6af"/><path class="x9csug_0s"/></g>`,
		"fallback": "lucide-lab:mask-snorkel",
	});
}

export default Component;
