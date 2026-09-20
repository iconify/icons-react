import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1mjunbsu.css';
import '../../css/m/maa03_qjt.css';
import '../../css/h/h01tyzbfu.css';
import '../../css/i/ickaa6b4c.css';
import '../../css/e/edgcd9bqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<mask id="SVGDnBAbbFI" class="n1mjunbsu"><path class="maa03_qjt"/></mask><g class="h01tyzbfu"><path mask="url(#SVGDnBAbbFI)" class="ickaa6b4c"/><circle class="edgcd9bqg"/></g>`,
		"fallback": "lets-icons:time-atack-duotone-line",
	});
}

export default Component;
