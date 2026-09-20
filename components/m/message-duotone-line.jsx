import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/n/nrwjwh1ea.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/v/va_ad4haj.css';
import '../../css/m/mam9x2b6y.css';
import '../../css/c/cj684s-mr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGNzYcbbPI" class="n1mjunbsu"><path class="nrwjwh1ea"/></mask><g class="h01tyzbfu"><rect class="va_ad4haj"/><path class="mam9x2b6y"/><path mask="url(#SVGNzYcbbPI)" class="cj684s-mr"/></g>`,
		"fallback": "lets-icons:message-duotone-line",
	});
}

export default Component;
