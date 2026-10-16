import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ui8-015uj.css';
import '../../css/l/lo86mjbod.css';

const viewBox = {"width":57,"height":58};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ui8-015uj"/><path clip-rule="evenodd" class="lo86mjbod"/></g>`,
		"fallback": "thesvg-color:label-studio",
	});
}

export default Component;
