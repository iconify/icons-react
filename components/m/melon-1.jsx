import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omv9s7boz.css';
import '../../css/u/uekytfwoi.css';
import '../../css/c/cf023dkpi.css';
import '../../css/j/jzbgh9b7f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omv9s7boz"/><path class="uekytfwoi"/><path class="cf023dkpi"/><path class="jzbgh9b7f"/>`,
		"fallback": "streamline-emojis:melon-1",
	});
}

export default Component;
