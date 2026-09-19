import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g90c98oen.css';
import '../../css/t/tk5zlblso.css';
import '../../css/v/vpcsadb2x.css';
import '../../css/m/m1hlppt_z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g90c98oen"/><circle class="tk5zlblso"/><circle class="vpcsadb2x"/><path class="m1hlppt_z"/>`,
		"fallback": "flat-color-icons:integrated-webcam",
	});
}

export default Component;
