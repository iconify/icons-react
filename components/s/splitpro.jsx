import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w03s3zj-z.css';
import '../../css/k/kc4mupbht.css';
import '../../css/j/jni1vxbzh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w03s3zj-z"/><path class="kc4mupbht"/><path class="jni1vxbzh"/>`,
		"fallback": "selfhst:splitpro",
	});
}

export default Component;
