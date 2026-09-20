import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yzlaxabyj.css';
import '../../css/r/rwdv8mi0b.css';
import '../../css/u/uxe5k4oaw.css';
import '../../css/v/vsy7zpdaj.css';
import '../../css/l/l7tb7abxw.css';

const viewBox = {"width":960,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yzlaxabyj"/><path class="rwdv8mi0b"/><path class="uxe5k4oaw"/><path class="vsy7zpdaj"/><path class="l7tb7abxw"/>`,
		"fallback": "thesvg-color:minnesota-wild",
	});
}

export default Component;
