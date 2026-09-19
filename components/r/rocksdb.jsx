import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pol6cgbck.css';
import '../../css/d/drobpt_me.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pol6cgbck"/><path class="drobpt_me"/>`,
		"fallback": "devicon:rocksdb",
	});
}

export default Component;
