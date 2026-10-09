import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bq7te71sv.css';
import '../../css/f/fr4uueuzf.css';
import '../../css/w/wgoa5abtu.css';
import '../../css/e/e7r812b2s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bq7te71sv"/><path class="fr4uueuzf"/><path class="wgoa5abtu"/><path class="e7r812b2s"/>`,
		"fallback": "energy-icons:recycle-20-bold",
	});
}

export default Component;
