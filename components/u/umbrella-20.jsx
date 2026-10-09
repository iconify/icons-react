import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic2trybrb.css';
import '../../css/y/yj8n5jbxd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic2trybrb"/><path class="yj8n5jbxd"/>`,
		"fallback": "energy-icons:umbrella-20",
	});
}

export default Component;
