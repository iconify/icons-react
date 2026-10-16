import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbd146bio.css';
import '../../css/o/os3zlpkkp.css';
import '../../css/k/kf8qud5kt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbd146bio"/><path class="os3zlpkkp"/><path class="kf8qud5kt"/>`,
		"fallback": "energy-icons:loan-20",
	});
}

export default Component;
