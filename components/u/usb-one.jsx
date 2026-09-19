import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0a9vkbzg.css';
import '../../css/i/igfdbbpka.css';
import '../../css/t/th-lrf6oo.css';
import '../../css/a/avawqp-np.css';
import '../../css/g/g2ohucvan.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="a0a9vkbzg"><path class="igfdbbpka"/><path class="th-lrf6oo"/><path class="avawqp-np"/><path class="g2ohucvan"/></g>`,
		"fallback": "icon-park:usb-one",
	});
}

export default Component;
