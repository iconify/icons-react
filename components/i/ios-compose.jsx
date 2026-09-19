import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ptdinhqmn.css';
import '../../css/m/m5swtfbed.css';
import '../../css/z/zyduq6bqi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ptdinhqmn"/><path class="m5swtfbed"/><path class="zyduq6bqi"/>`,
		"fallback": "ion:ios-compose",
	});
}

export default Component;
