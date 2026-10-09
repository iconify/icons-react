import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/onhfuzbtz.css';
import '../../css/j/jebv5b9nd.css';
import '../../css/q/qhmpud_oy.css';
import '../../css/k/k49tplz7p.css';
import '../../css/n/n1tyv62lo.css';
import '../../css/z/zksfegh-a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="onhfuzbtz"/><path class="jebv5b9nd"/><path class="qhmpud_oy"/><path class="k49tplz7p"/><path class="n1tyv62lo"/><path class="zksfegh-a"/>`,
		"fallback": "energy-icons:pantograph-charger-48-bold",
	});
}

export default Component;
