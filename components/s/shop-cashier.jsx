import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3o5zzb5y.css';
import '../../css/m/m5vgbabfw.css';
import '../../css/l/l07zo5b4u.css';
import '../../css/s/sfxaj3bwn.css';
import '../../css/o/ooy378k0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h3o5zzb5y"/><path clip-rule="evenodd" class="m5vgbabfw"/><path clip-rule="evenodd" class="l07zo5b4u"/><path class="sfxaj3bwn"/><path class="ooy378k0f"/>`,
		"fallback": "streamline-freehand:shop-cashier",
	});
}

export default Component;
