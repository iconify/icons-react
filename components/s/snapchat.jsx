import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyuqmjbvt.css';
import '../../css/v/vto5gdbcx.css';
import '../../css/h/hmitehp6t.css';
import '../../css/m/mxy__0bzi.css';

const viewBox = {"width":514.631,"height":514.631,"left":147.353,"top":39.286};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyuqmjbvt"/><path class="vto5gdbcx"/><path class="hmitehp6t"/><path class="mxy__0bzi"/>`,
		"fallback": "thesvg-color:snapchat",
	});
}

export default Component;
