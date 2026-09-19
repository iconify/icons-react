import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syarxqbkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syarxqbkc"/>`,
		"fallback": "cbi:seagate-ssd-m2",
	});
}

export default Component;
