import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gwgplcc3u.css';
import '../../css/g/gp0egaclj.css';
import '../../css/b/bopi9b9jn.css';
import '../../css/f/fxwnb7vgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="gwgplcc3u"/><circle class="gp0egaclj"/><circle class="bopi9b9jn"/><circle class="fxwnb7vgp"/></g>`,
		"fallback": "lucide:orbit",
	});
}

export default Component;
