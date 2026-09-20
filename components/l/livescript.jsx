import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tk6mrwbwh.css';
import '../../css/e/ehn9ppzlr.css';
import '../../css/j/jpbcbrl-a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tk6mrwbwh"/><path class="ehn9ppzlr"/><path class="jpbcbrl-a"/>`,
		"fallback": "material-icon-theme:livescript",
	});
}

export default Component;
