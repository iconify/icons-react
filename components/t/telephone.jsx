import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/ppvsq_uxf.css';
import '../../css/s/s-2t6oztj.css';
import '../../css/d/daco-tbph.css';
import '../../css/a/az8oswbvl.css';
import '../../css/q/qt7nybb1l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ppvsq_uxf"/><path class="s-2t6oztj"/><path class="daco-tbph"/><path class="az8oswbvl"/><path class="qt7nybb1l"/></g>`,
		"fallback": "fluent-emoji-flat:telephone",
	});
}

export default Component;
