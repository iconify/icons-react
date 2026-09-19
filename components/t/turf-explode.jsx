import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzwxxyb8c.css';
import '../../css/k/kvxncwbco.css';
import '../../css/w/wbql4k8nx.css';
import '../../css/h/hvjzb1bja.css';
import '../../css/i/i2ypxfb0a.css';
import '../../css/l/l7-a0ebqv.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="pzwxxyb8c"/><circle class="kvxncwbco"/><circle class="wbql4k8nx"/><circle class="hvjzb1bja"/><path class="i2ypxfb0a"/><circle class="l7-a0ebqv"/>`,
		"fallback": "geo:turf-explode",
	});
}

export default Component;
