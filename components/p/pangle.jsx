import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzsdgpbbo.css';
import '../../css/h/hw92yybbn.css';
import '../../css/n/nestvlb0s.css';
import '../../css/x/xi25rhb2u.css';
import '../../css/m/mjhy7iw7h.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzsdgpbbo"/><path class="hw92yybbn"/><path class="nestvlb0s"/><path class="xi25rhb2u"/><path class="mjhy7iw7h"/>`,
		"fallback": "icon-park:pangle",
	});
}

export default Component;
