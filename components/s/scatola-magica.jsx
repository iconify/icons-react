import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aq45rlu7v.css';
import '../../css/a/a_5lpib9v.css';
import '../../css/o/ocwf-ob2r.css';
import '../../css/j/j-nugac0o.css';
import '../../css/g/gbguvikkd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aq45rlu7v"/><path class="a_5lpib9v"/><path class="ocwf-ob2r"/><path class="j-nugac0o"/><path class="gbguvikkd"/>`,
		"fallback": "selfhst:scatola-magica",
	});
}

export default Component;
