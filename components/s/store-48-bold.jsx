import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pmov8hb-b.css';
import '../../css/m/mn4wyfb1u.css';
import '../../css/a/anwbogkuk.css';
import '../../css/x/xog6z1bwh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pmov8hb-b"/><path class="mn4wyfb1u"/><path class="anwbogkuk"/><path class="xog6z1bwh"/>`,
		"fallback": "energy-icons:store-48-bold",
	});
}

export default Component;
