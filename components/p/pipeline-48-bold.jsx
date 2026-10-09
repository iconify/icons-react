import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9znocb5r.css';
import '../../css/s/stcfx4bpj.css';
import '../../css/f/f5atepbej.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9znocb5r"/><path class="stcfx4bpj"/><path class="f5atepbej"/>`,
		"fallback": "energy-icons:pipeline-48-bold",
	});
}

export default Component;
