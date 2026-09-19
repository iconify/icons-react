import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgjxk0u1q.css';
import '../../css/a/auqkg35_k.css';
import '../../css/h/hw4iexbpi.css';
import '../../css/x/xdn4qlb1g.css';
import '../../css/t/tghi_kbxe.css';
import '../../css/a/amfqz6wme.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="jgjxk0u1q"/><circle class="auqkg35_k"/><circle class="hw4iexbpi"/><circle class="xdn4qlb1g"/><circle class="tghi_kbxe"/><path class="amfqz6wme"/>`,
		"fallback": "geo:turf-triangle-grid",
	});
}

export default Component;
