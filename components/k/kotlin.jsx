import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddrw5y_gc.css';
import '../../css/y/y11yglgsg.css';
import '../../css/o/o-m18bc6g.css';
import '../../css/a/a-inplbuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGO9IkJb7f" x1="1.725" x2="22.185" y1="22.67" y2="1.982" gradientTransform="translate(1.306 1.129)scale(.89324)" gradientUnits="userSpaceOnUse"><stop offset="0" class="ddrw5y_gc"/><stop offset=".5" class="y11yglgsg"/><stop offset="1" class="o-m18bc6g"/></linearGradient></defs><path fill="url(#SVGO9IkJb7f)" class="a-inplbuk"/>`,
		"fallback": "material-icon-theme:kotlin",
	});
}

export default Component;
