import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3tv7p26k.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g-1_khbxw.css';
import '../../css/b/b4l7sfbif.css';
import '../../css/p/pt5xdfm_k.css';
import '../../css/k/kacu5i2qy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3tv7p26k secondary"/><g class="dt0cm9dhy primary"><path class="g-1_khbxw"/><path class="b4l7sfbif"/><path class="pt5xdfm_k"/><path class="kacu5i2qy"/></g>`,
		"fallback": "iconaut:podium-duo",
	});
}

export default Component;
