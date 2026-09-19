import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fe6_45bhk.css';
import '../../css/w/wx1w62bye.css';
import '../../css/c/ca1uvsbeh.css';
import '../../css/e/eh5-hca6o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fe6_45bhk"/><path class="wx1w62bye"/><path class="ca1uvsbeh"/><path class="eh5-hca6o"/></g>`,
		"fallback": "fluent-emoji-flat:leaf-fluttering-in-wind",
	});
}

export default Component;
