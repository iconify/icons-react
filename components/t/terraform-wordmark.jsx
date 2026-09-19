import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b75v6sxqz.css';
import '../../css/v/v85auebpa.css';
import '../../css/f/f2zzjubol.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b75v6sxqz"/><path class="v85auebpa"/><path class="f2zzjubol"/>`,
		"fallback": "devicon-plain:terraform-wordmark",
	});
}

export default Component;
