import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gshe_di8n.css';
import '../../css/q/q3p31cclv.css';
import '../../css/k/kadgmyb-f.css';
import '../../css/s/s99an3pus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gshe_di8n"/><path class="q3p31cclv"/><path class="kadgmyb-f"/><path class="s99an3pus"/>`,
		"fallback": "fontisto:sunglasses",
	});
}

export default Component;
