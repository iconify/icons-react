import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilao8nohd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilao8nohd"/>`,
		"fallback": "thesvg-color:sonatype",
	});
}

export default Component;
