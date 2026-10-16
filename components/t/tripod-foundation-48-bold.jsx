import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oov8pib4i.css';
import '../../css/i/ieixs4hsi.css';
import '../../css/v/vi7-jr65m.css';
import '../../css/x/xcc9jibon.css';
import '../../css/h/h2w2gxl4v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oov8pib4i"/><path class="ieixs4hsi"/><path class="vi7-jr65m"/><path class="xcc9jibon"/><path class="h2w2gxl4v"/>`,
		"fallback": "energy-icons:tripod-foundation-48-bold",
	});
}

export default Component;
