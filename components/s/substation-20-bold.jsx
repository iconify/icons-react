import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gikhi2gcs.css';
import '../../css/v/v10bzbf9m.css';
import '../../css/i/iw3d79bxh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gikhi2gcs"/><path class="v10bzbf9m"/><path class="iw3d79bxh"/>`,
		"fallback": "energy-icons:substation-20-bold",
	});
}

export default Component;
