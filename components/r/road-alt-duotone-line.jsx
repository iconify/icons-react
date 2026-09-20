import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o58hkebvg.css';
import '../../css/v/v7rtunbwn.css';
import '../../css/t/tu6hf7byk.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGfGA9Aeaq"><g class="o58hkebvg"><path class="v7rtunbwn"/><path class="tu6hf7byk"/></g></mask></defs><path mask="url(#SVGfGA9Aeaq)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:road-alt-duotone-line",
	});
}

export default Component;
