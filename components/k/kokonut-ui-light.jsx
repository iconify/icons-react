import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qttsuk-3d.css';
import '../../css/r/r4okgti6i.css';
import '../../css/t/tpe0tsbmv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qttsuk-3d"/><path class="r4okgti6i"/><path class="tpe0tsbmv"/></g>`,
		"fallback": "thesvg-color:kokonut-ui-light",
	});
}

export default Component;
