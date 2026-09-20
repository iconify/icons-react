import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hlhuly6ye.css';
import '../../css/d/d752omw5m.css';
import '../../css/n/nmoouyb9r.css';
import '../../css/v/v2yh68gxe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="hlhuly6ye"/><path class="d752omw5m"/><circle class="nmoouyb9r"/><circle class="v2yh68gxe"/></g>`,
		"fallback": "lucide:tractor",
	});
}

export default Component;
