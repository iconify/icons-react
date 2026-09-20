import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ka828nvzs.css';
import '../../css/o/o292irb5l.css';
import '../../css/x/xlp4lif3y.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ka828nvzs"/><path clip-rule="evenodd" class="o292irb5l"/><path class="xlp4lif3y"/>`,
		"fallback": "qlementine-icons:qr-code-16",
	});
}

export default Component;
