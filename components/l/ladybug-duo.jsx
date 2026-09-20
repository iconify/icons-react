import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k8flcdbca.css';
import '../../css/x/x6ze0wblj.css';
import '../../css/l/lkhgg11it.css';
import '../../css/n/nl6wvub4t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k8flcdbca"/><path class="x6ze0wblj"/><path class="lkhgg11it"/><path class="nl6wvub4t"/></g>`,
		"fallback": "streamline-kameleon-color:ladybug-duo",
	});
}

export default Component;
