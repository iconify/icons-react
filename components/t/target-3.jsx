import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvdu31bue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvdu31bue"/>`,
		"fallback": "streamline-sharp-color:target-3",
	});
}

export default Component;
