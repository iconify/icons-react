import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/u/ucoihybqi.css';
import '../../css/w/wh7u0q79h.css';
import '../../css/y/ym9-dsbup.css';
import '../../css/o/oc2pr0b7d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="ucoihybqi"/><path class="wh7u0q79h"/><circle class="ym9-dsbup"/><path class="oc2pr0b7d"/></g>`,
		"fallback": "icon-park:passport",
	});
}

export default Component;
