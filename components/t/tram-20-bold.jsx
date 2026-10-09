import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dor66wbvq.css';
import '../../css/k/kwomwyfwn.css';
import '../../css/f/fdb759y4b.css';
import '../../css/j/jzsdjnblo.css';
import '../../css/a/aol1lebbt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dor66wbvq"/><path class="kwomwyfwn"/><path class="fdb759y4b"/><path class="jzsdjnblo"/><path class="aol1lebbt"/>`,
		"fallback": "energy-icons:tram-20-bold",
	});
}

export default Component;
