import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gstd5dbik.css';
import '../../css/j/j4hy2kb8r.css';
import '../../css/z/zn0v0yjgo.css';
import '../../css/a/axli2ab7b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gstd5dbik"/><path class="j4hy2kb8r"/><path class="zn0v0yjgo"/><path class="axli2ab7b"/>`,
		"fallback": "streamline-emojis:musical-note",
	});
}

export default Component;
