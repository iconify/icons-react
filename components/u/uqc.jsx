import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/de4okpb9e.css';
import '../../css/x/x6suj9b7h.css';
import '../../css/r/rwj7e9bas.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="de4okpb9e"/><path class="x6suj9b7h"/><path class="rwj7e9bas"/>`,
		"fallback": "token:uqc",
	});
}

export default Component;
