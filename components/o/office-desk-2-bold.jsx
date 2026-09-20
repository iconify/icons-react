import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q374rys3f.css';
import '../../css/q/q71f84oat.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q374rys3f"/><path class="q71f84oat"/>`,
		"fallback": "streamline-ultimate:office-desk-2-bold",
	});
}

export default Component;
