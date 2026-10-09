import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbx5zccce.css';
import '../../css/h/ht2w2gbct.css';
import '../../css/i/ip_kbyb2f.css';
import '../../css/i/iqyfmrbeb.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fbx5zccce"/><path class="ht2w2gbct"/><path class="ip_kbyb2f"/><path class="iqyfmrbeb"/>`,
		"fallback": "energy-icons:mvhr-20",
	});
}

export default Component;
