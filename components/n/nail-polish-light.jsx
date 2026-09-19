import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cqd2d_mab.css';
import '../../css/h/hl4p-db8y.css';
import '../../css/f/f8e0vub3m.css';
import '../../css/r/rrz4x7bdi.css';
import '../../css/j/jqhhsu1iz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cqd2d_mab"/><path class="hl4p-db8y"/><path class="f8e0vub3m"/><path class="rrz4x7bdi"/><path class="jqhhsu1iz"/></g>`,
		"fallback": "fluent-emoji-flat:nail-polish-light",
	});
}

export default Component;
